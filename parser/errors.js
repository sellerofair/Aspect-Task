'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/** 
 * Исключение для обработки ошибок, связанных с неверным синтаксисом XML.
 */
 class XmlStatementError extends Error {

    constructor(message='Bad XML statement') {
        
        super(message);
        this.name = 'XmlStatementError';
    }
}

module.exports.XmlStatementError = XmlStatementError;