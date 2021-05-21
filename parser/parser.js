'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
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

    /** 
     * Содержимое
     * 
     * @type { string }
     */
    text;
}

/** Параметры парсера. */
class ParserParameters {

    constructor() {

        this.stack = [];
        this.tag = '';
        this.key = '';
        this.value = '';
        this.attributes = [];
        this.content = '';
        this.quote = '"';
    }

    /** 
     * Стек тегов
     * 
     * @type { string[] }
     */
    stack;

    /** Тег в текущем положении парсера */
    tag;

    /**
     * Атрибуты в текущем положении парсера.
     * 
     * @type { {key: string, value: any}[] }
     */
    attributes;

    /** Ключ атрибута в текущем положении парсера */
    key;

    /**
     * Значение атрибута в текущем положении парсера
     * 
     * @type { any }
     */
    value;

    /**
     * Содержимое в текущем положении парсера
     * Например <teg>content</teg>,
     * где content - не объект!!!
     * 
     * @type { any }
     */
    content;

    /** Хранит, какие кавычки в данный момент использует парсер */
    quote;
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

                case Stage.WAITKEY:
                    if (this.#waitKeyStatus(currentChar, currentIsSpace, nextChar)) {
                        return;
                    }
                    break;

                case Stage.KEY:
                    this.#readKey(currentChar, currentIsSpace);
                    break;

                case Stage.WAITEQUAL:
                    this.#waitEqual(currentChar, currentIsSpace);
                    break;

                case Stage.WAITVALUE:
                    this.#waitValue(currentChar, currentIsSpace);
                    break;

                case Stage.VALUE:
                    if (currentChar === this.#params.quote) {
                        this.#readValue();
                    }
                    this.#params.value += currentChar;
                    break;

                case Stage.WAITCONTENT:
                    this.#waitContent(currentChar, currentIsSpace);
                    break;

                case Stage.CONTENT:
                    if (currentChar === '<') {
                        this.#readContent();
                        return;
                    }
                    this.#params.content += currentChar;
                    break;

                case Stage.CLOSETAG:
                    if (this.#closeTagStatus(currentChar)) {
                        return;
                    }
                    break;

                case Stage.COMMENT:                                 // TODO make a function instead
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
            }
        }
    }

    /**
     * Выбор события после WAITTAG.
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

            this.#currentStage = Stage.WAITKEY;

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

            case '"':
            case "'":
            case '<':
            case '&':
                throw new XmlStatementError(`Unexpected sign (${currentChar})! Position: ${this.#currentIndex}`);
        }

        return {
            tagIsFormed: false,
            parseIsCompleted: false
        };
    }

    /**
     * Выбор события после WAITKEY.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     * @param { string } nextChar Следующий символ
     * 
     * @returns { boolean } Результат парсинга
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    #waitKeyStatus(currentChar, currentIsSpace, nextChar) {

        switch (currentChar) {

            case '>':

                this.#params.stack.push(this.#params.tag);
                this.#currentStage = Stage.OPENTAG;
                this.#nextStage = Stage.WAITCONTENT;

                return true;

            case '/':

                if (nextChar != '>') {

                    throw new XmlStatementError(`Tag '${this.#params.tag}' is not closed! '>' missed. Position: ${this.#currentIndex + 1}`);
                }

                this.#currentStage = Stage.SINGLETAG;
                this.#nextStage = Stage.WAITTAG;
                this.#currentIndex++;

                return true;

            case '"':
            case "'":
                throw new XmlStatementError(`Empty key! Quot(${currentChar}) is not expected. Position: ${this.#currentIndex}`);
            }

        if (!currentIsSpace) {
            this.#currentStage = Stage.KEY;
            this.#params.key += currentChar;
        }

        return false;
    }

    /**
     * Читает ключ атрибута.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     */
    #readKey(currentChar, currentIsSpace) {

        if (currentIsSpace) {
            this.#currentStage = Stage.WAITEQUAL;
            return;
        }

        switch (currentChar) {

            case '=':
                this.#currentStage = Stage.WAITVALUE;
                return;
    
            case '"':
            case "'":
            case '/':
            case '>':
            case '<':
            case '&':
                throw new XmlStatementError(`Unexpected sign (${currentChar})! Position: ${this.#currentIndex}`);
        }

        if (currentChar === '=') {
            this.#currentStage = Stage.WAITVALUE;
            return;
        }
        this.#params.key += currentChar;
        
        return;
    }

    /**
     * Ждёт знак равенства '='.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    #waitEqual(currentChar, currentIsSpace) {

        if (currentChar === '=') {
            this.#currentStage = Stage.WAITVALUE;
            return;
        }

        if (!currentIsSpace) {
            throw new XmlStatementError(`Value missed! Equal sign '=' expected. Position: ${this.#currentIndex}`);
        }
    }

    /**
     * Ждёт значение атрибута.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     * 
     * @throws { XmlStatementError } Неверный синтаксис
     */
    #waitValue(currentChar, currentIsSpace) {

        if (currentChar === '"' || currentChar === "'") {
            this.#currentStage = Stage.VALUE;
            this.#params.quote = currentChar;
        }

        if (!currentIsSpace) {
            throw new XmlStatementError(`Value missed! Start quot(' or ") missed. Position: ${this.#currentIndex}`);
        }

        return;
    }

    /**
     * Читает значение атрибута.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     */
    #readValue() {

        let value;

        if (this.#params.value === '') {
            value = null;

        } else {
            try {
                value = JSON.parse(this.#params.value);

            } catch {
                value = this.#params.value;
            }
        }

        this.#params.attributes.push({
            key: this.#params.key,
            value: value
        })

        this.#params.key = '';
        this.#params.value = '';
        this.#currentStage = Stage.WAITKEY;
    }

    /**
     * Ждёт содержимое.
     * 
     * @param { string } currentChar Текущий символ
     * @param { boolean } currentIsSpace Является ли текущий символ пробельным?
     */
    #waitContent(currentChar, currentIsSpace) {

        if (currentChar === '<') {
            this.#currentStage = Stage.TAG;
            break;
        }

        if (!currentIsSpace) {
            this.#currentStage = Stage.CONTENT;
            this.#params.content += currentChar;
            break;
        }
    }

    /** Читает содержимое. */
    #readContent() {

        let content;

        if (this.#params.content === '') {
            content = null;

        } else {
            try {
                content = JSON.parse(this.#params.content);

            } catch {
                content = this.#params.content.trim();
            }
        }

        this.#nextStage = Stage.TAG;
        
        this.#params.content = content;
    }

    #closeTagStatus(currentChar) {

        switch (currentChar) {

            case '>':

                let openTag = this.#params.stack.pop();
                let closeTag = this.#params.tag

                if (openTag === closeTag) {
                    this.#nextStage = Stage.WAITTAG;
                    this.#params.tag = '';
                    return true;

                } else {
                    throw new XmlStatementError(`Close tag </${closeTag}> does nost match open tag <${openTag}>! Position: ${this.#currentIndex}`);
                }

            case '"':
            case "'":
            case '/':
            case '<':
                    throw new XmlStatementError(`Unexpected sign (${currentChar})! Position: ${this.#currentIndex}`);
        }

        this.#params.tag += currentChar;

        return false;
    }
}

module.exports.LinkedString = LinkedString;
module.exports.Parser = Parser;