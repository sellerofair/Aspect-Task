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
 * Параметры парсера.
 */
class ParserParameters {

    constructor() {

        /** 
         * Стек тегов
         * 
         * @type { string[] }
         */
        this.stack = [];

        /**
         * Тег в текущем положении парсера
         * 
         * @type { string }
         */
        this.tag = '';

        /**
         * Атрибуты в текущем положении парсера.
         * 
         * @type { {key: string, value: string}[] }
         */
        this.attributes = [];

        /**
         * Содержимое в текущем положении парсера
         * Например <teg>content</teg>,
         * где content - не объект!!!
         * 
         * @type { string }
         */
        this.content = '';

        /**
         * Хранит, какие кавычки в данный момент использует парсер
         * 
         * @type { string }
         */
        this.quote = '"';
    }
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
        this.#prolog = '';
        this.#currentIndex = 0;
        this.#currentStage = Stage.WAITTAG;
        this.#nextStage = Stage.WAITTAG;
        this.#length = linkedString.text.length;
        this.#params = new ParserParameters;
    }

    /** Поток символов */
    #thread;

    /** Пролог */
    #prolog;

    /** Текущие параметры парсера */
    #params;

    /** Индекс текущего положения парсера */
    #currentIndex;

    /** Текущее событие парсера (TAG, CLOSETAG, CONTENT, KEY, VALUE) */
    #currentStage;

    /** Следующее событие парсера (TAG, CLOSETAG, CONTENT, KEY, VALUE) */
    #nextStage;

    /** Длина строки, которую сканирует парсер */
    #length;

    [Symbol.iterator]() { return this; }

    /**
     * Возвращает следующее событие (Stage) в цикле for .. of
     * (OPENTAG, CLOSETAG, SINGLETAG, CONTENT).
     * 
     * @returns { {done: boolean, value: symbol} } Текущее событие
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    next() {

        this.#currentStage = this.#nextStage;
        this.#params.tag = '';
        this.#params.content = '';
        this.#params.attributes = {};

        this.#parse();

        if (this.#currentIndex < this.#length) {

            return {
                done: false,
                value: this.#currentStage
            };

        } else { return { done: true }; }
    }

    /**
     * Возвращает прочитанную информацию.
     */
    getNext() {
        
        try { return JSON.parse(this.#params.buffer.trim()); }
        
        catch { return this.#params.buffer.trim(); }
    }

    /**
     * Сканирует текст, меняет параметры парсера (this.#params).
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    #parse() {

        for (; this.#currentIndex < this.#length; this.#currentIndex++) {

            /** Текущий символ */
            let currentChar = this.#thread.text[this.#currentIndex];

            /** Следующий символ */
            let nextChar = this.#thread.text[this.#currentIndex + 1];

            /** Является ли текущий символ пробельным? */
            let currentIsSpace = /\s/.test(currentChar);

            /** Является ли следующий символ пробельным? */
            let nextIsSpace = /\s/.test(currentChar);

            switch (this.#currentStage) {

                case Stage.WAITTAG:

                    if (currentChar === '<') {

                        this.#switchWaitTag(nextChar, nextIsSpace);
                    }

                    break;

                case Stage.TAG:

                    let {
                        tagIsFormed: tagIsFormed,
                        parseIsCompleted: parseIsCompleted
                    } = this.#readTagStatus(currentChar, currentIsSpace, nextChar);

                    if (tagIsFormed) break;
                    if (parseIsCompleted) return;

                    this.#params.tag += currentChar;

                    break;
    
                case Stage.COMMENT:
                    if (currentChar === '>') { 
                        this.#currentStage = Stage.WAITTAG;
                    }
                    break;

                case Stage.PROLOG:
                    if (currentChar === '>') {
                        this.#currentStage = Stage.WAITTAG;
                        break;
                    }
                    this.#prolog += currentChar;
                    break;

                case Stage.WAITKEY:
                    if (this.#waitKeyStatus(currentChar, currentIsSpace, nextChar)) {
                        return;
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
    }

    /**
     * Выбор события после WAITTAG в зависимости от следующего символа.
     * 
     * @param { string } nextChar Следующий символ
     * @param { boolean } nextIsSpace Является ли следующий символ пробельным?
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    #switchWaitTag(nextChar, nextIsSpace) {

        if (nextIsSpace) {

            throw new XmlStatementError(`Empty tag name! Position: ${this.#currentIndex + 1}`);
        }

        switch (nextChar) {

            case '/':
                this.#currentStage = Stage.CLOSETAG;
                this.#currentIndex++;
                break;

            case '!':
                this.#currentStage = Stage.COMMENT;
                this.#currentIndex++;
                break;

            case '?':

                if (this.#prolog != '') {

                    throw new XmlStatementError(`Another prolog! Position: ${this.#currentIndex + 1}`);
                }

                this.#currentStage = Stage.PROLOG;
                this.#currentIndex++;
                break;

            case '>':
                throw new XmlStatementError(`Empty tag name! Position: ${this.#currentIndex + 1}`);

            default:
                this.#currentStage = Stage.TAG;
                this.#params.tag += nextChar;
                this.#currentIndex++;
                break;
        }
    }

    /**
     * Выбор события при чтении тега.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     * @param { string } nextChar Следующий символ
     * 
     * @returns { {tagIsFormed: boolean, parseIsCompleted: boolean} } Результат парсинга
     * 
     * @throws { XmlStatementError } Неверный синтаксис
    */
    #readTagStatus(currentChar, currentIsSpace, nextChar) {

        if (currentIsSpace) {

            currentStage = Stage.WAITKEY;

            return {
                tagIsFormed: true,
                parseIsCompleted: false
            };
        }

       switch (currentChar) {

            case '>':

                this.#params.stack.push(this.#params.tag);
                this.#currentStage = Stage.OPENTAG;
                this.#nextStage = Stage.WAITCONTENT;

                return {
                    tagIsFormed: true,
                    parseIsCompleted: true
                };

            case '/':

                if (nextChar != '>') {

                    throw new XmlStatementError(`Tag is not closed! Position: ${this.#currentIndex + 1}`);
                }

                this.#currentStage = Stage.SINGLETAG;
                this.#nextStage = Stage.WAITTAG;

                return {
                    tagIsFormed: true,
                    parseIsCompleted: true
                };
        }

        return {
            tagIsFormed: false,
            parseIsCompleted: false
        };
    }

    #waitKeyStatus(currentChar, currentIsSpace, nextChar) {

        switch (currentChar) {

            case '>':

                this.#params.stack.push(this.#params.tag);
                this.#currentStage = Stage.OPENTAG;
                this.#nextStage = Stage.WAITCONTENT;

                return true;

            case '/':

                if (nextChar != '>') {

                    throw new XmlStatementError(`Tag is not closed! Position: ${this.#currentIndex + 1}`);
                }

                this.#currentStage = Stage.SINGLETAG;
                this.#nextStage = Stage.WAITTAG;

                return true;
        }

        if (!currentIsSpace) {
            this.#currentStage = Stage.KEY;
            this.#params.key += currentChar;
        }

        return false;
    }
}

module.exports.LinkedString = LinkedString;
module.exports.Parser = Parser;