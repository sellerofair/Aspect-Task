"use strict"

// Создание абстрактного объекта без использования классов

// Импорт в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { stage } = require('../constants/enums');
const { XmlStatementError } = require('../classes/errors');

/**
 * Объект-обертка для строки.
 * Нужен для исключения двойного хранения строки с данными.
 */
class LinkedString {

    /**
     * Создает экземпляр обертки
     * 
     * @param {string} text Строка источник
     */
    constructor(text) { this.text = text; }
}

/**
 * Класс парсер.
 * Экземпляр парсера сканирует текст на наличие XML тегов и
 * возвращает событие, либо строку в текущей позиции.
 */
class Parser {

    /**
     * Создает экземпляр парсера
     * 
     * @param {LinkedString} linkedString Ссылка на строку
     */
    constructor(linkedString) {
    
        this.#thread = linkedString;
        this.#currentIndex = 0;
        this.#length = linkedString.text.length;

        this.#params = {
            currentStage: stage.WAITTAG,
            tag: '',
            content: '',
            key: '',
            value: '',
            quote: '"',
            isSpace: false        
        }
    }

    #thread;
    #params
    #currentIndex;
    #length;

    [Symbol.iterator]() { return this; }

    /**
     * Возвращает следующее событие (одно из указанных в stage)
     * в цикле for .. of
     * 
     * @returns { symbol } Текущее событие
     */
    next() {
        if (this.#currentIndex < this.#length  && this.#parse()) {
            return { done: false, value: this.#params.currentStage };
        } else {
            return { done: true };
        }
    }

    #parse() {
                                                                                    // TODO
    }
}

module.exports.LinkedString = LinkedString;
module.exports.Parser = Parser;