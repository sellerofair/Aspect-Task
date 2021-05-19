'use strict'

// Импорт в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { Stage } = require('./enums');
const { XmlStatementError } = require('./errors');

/**
 * Объект-обертка для строки.
 * Нужен для исключения двойного хранения строки с данными.
 */
class LinkedString {

    /**
     * Создает экземпляр обертки.
     * 
     * @param { string } text Строка источник
     */
    constructor(text) { this.text = text; }
}

/**
 * Класс парсера.
 * Экземпляр парсера сканирует текст на наличие XML тегов и
 * возвращает событие, либо строку в текущей позиции.
 */
class Parser {

    /**
     * Создает экземпляр парсера.
     * 
     * @param { LinkedString } linkedString Ссылка на строку
     */
    constructor(linkedString) {
    
        this.#thread = linkedString;
        this.#currentIndex = 0;
        this.#length = linkedString.text.length;

        this.#params = {
            stack: [],
            currentStage: Stage.WAITTAG,
            tag: '',
            content: '',
            key: '',
            value: '',
            quote: '"',
        }
    }

    /** Поток символов */
    #thread;

    /** Текущие параметры парсера */
    #params

    /** Индекс текущего положения парсера */
    #currentIndex;

    /** Длина строки, которую сканирует парсер */
    #length;

    [Symbol.iterator]() { return this; }

    /**
     * Возвращает следующее событие (Stage)
     * в цикле for .. of.
     * 
     * @returns { {boolean, symbol} } Текущее событие
     */
    next() {

        if (this.#currentIndex < this.#length && this.#parse()) {            
            return { done: false, value: this.#params.currentStage };
        } else {
            return { done: true };
        }
    }

    /**
     * Сканирует текст и меняет currentStage в params.
     * Если текст пройден до конца, возвращает false.
     * 
     * @returns { boolean } Результат сканирования
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    #parse() {

        for (let i = this.#currentIndex; i < this.#length; i++) {

            /** Текущий символ */
            let char = this.#thread.text[i];

            /** Следующий символ */
            let nextChar = this.#thread.text[i + 1];

            /** Является ли текущий символ пробельным? */
            let isSpace = /\s/.test(char);

            switch (this.#params.currentStage) {

                case Stage.WAITTAG:

                    if (char === '<') {

                        switch (nextChar) {

                            case '/':
                                this.#params.currentStage = Stage.CLOSETAG;
                                this.#currentIndex = i + 2;
                                return true;

                            case '!':
                                this.#params.currentStage = Stage.COMMENT;
                                this.#currentIndex = i + 2;
                                return true;

                            case '?':
                                this.#params.currentStage = Stage.PROLOG;
                                this.#currentIndex = i + 2;
                                return true;

                            case isSpace:
                                throw new XmlStatementError(`Empty tag name! Position: ${i + 1}`);
        
                            default:
                                this.#params.currentStage = Stage.TAG;
                                this.#currentIndex = i + 1;
                                return true;
                        }
                    }

                    break;
    
                case Stage.TAG:
    
                    if (char === '>') {
                        addObject(stack, tag);
                        currentStage = Stage.WAITCONTENT;
                        tag = '';
                        break;
                    }
    
                    if (isSpace) {
                        addObject(stack, tag);
                        currentStage = Stage.WAITKEY;
                        tag = '';
                        break;
                    }
    
                    if (char === '/') {
                        if (tag.length != 0) {
                            addObject(stack, tag);
                            stack.pop();
                            currentStage = Stage.WAITTAG;
                        } else { currentStage = Stage.CLOSETAG; }
    
                        break;
                    }
    
                    if (char === '!') {
                        currentStage = Stage.COMMENT;
                        break;
                    }
    
                    if (char === '?') {
                        currentStage = Stage.PROLOG;
                        break;
                    }
    
                    tag += char;
    
                    break;
    
                case Stage.COMMENT:
                    if (char === '>') {
                        currentStage = Stage.WAITTAG;
                        break;
                    }
                    break;
    
                case Stage.PROLOG:
                    if (char === '>') {
                        currentStage = Stage.WAITTAG;
                        break;
                    }
                    break;
    
                case Stage.WAITKEY:
    
                    if (char === '>') {
                        currentStage = Stage.WAITCONTENT;
                        break;
                    }
    
                    if (char === '/') {
                        stack.pop();
                        currentStage = Stage.WAITTAG;
                        break;
                    }
    
                    if (!isSpace) {
                        currentStage = Stage.KEY;
                        key += char;
                        break;
                    }
    
                    break;
    
                case Stage.KEY:
                    if (char === '=') {
                        currentStage = Stage.WAITVALUE;
                        break;
                    }
                    if (isSpace) {
                        currentStage = Stage.WAITEQUAL;
                        break;
                    }
                    key += char;
                    break;
    
                case Stage.WAITEQUAL:
                    if (!isSpace) {
                        if (char === '=') {
                            currentStage = Stage.WAITVALUE;
                            break;
                        } else { throw new XmlStatementError(); }
                    }
                    break;
        
                case Stage.WAITVALUE:
                    if (char === '"' || char === "'") {
                        currentStage = Stage.VALUE;
                        quote = char;
                    }
                    break;
    
                case Stage.VALUE:
                    if (char === quote) {
                        try {
                            stack[stack.length - 1].object[key] = JSON.parse(value);
                        } catch {
                            stack[stack.length - 1].object[key] = value;
                        }
                        key = '';
                        value = '';
                        currentStage = Stage.WAITKEY;
                        break;
                    }
                    value += char;
                    break;
    
                case Stage.WAITCONTENT:
                    if (char === '<') {
                        currentStage = Stage.TAG;
                        break;
                    }
                    if (!isSpace) {
                        currentStage = Stage.CONTENT;
                        content += char;
                        break;
                    }
                    break;
        
                case Stage.CONTENT:
                    if (char === '<') {
                        try {
                            stack[stack.length - 1].object["content"] = JSON.parse(content.trim());
                        } catch {
                            stack[stack.length - 1].object["content"] = content.trim();
                        }
                        currentStage = Stage.TAG;
                        content = '';
                    }
                    content += char;
                    break;
    
                case Stage.CLOSETAG:
                    if (char === '>') {
                        if (stack[stack.length - 1].tag === tag) {
                            stack.pop();
                            currentStage = Stage.WAITTAG;
                            tag = '';
                            break;
                        } else { throw new XmlStatementError(); }
                    }
                    tag += char;
            }
        }

        return false;
    }
}

module.exports.LinkedString = LinkedString;
module.exports.Parser = Parser;