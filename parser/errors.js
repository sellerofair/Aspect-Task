'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/** Исключение для обработки ошибок, связанных с неверным синтаксисом XML. */
class XmlStatementError extends Error {

    constructor(message='Bad XML statement') {
        super(message);
        this.name = 'XmlStatementError';
    }
}

/** Исключение для предотвращения создания экземпляра Stage. */
class StageInstatiationError extends Error {

    constructor() {
        super('Stage is enumerated type and can\'t be instantiated.');
        this.name = 'StageInstatiationError';
    }
}

module.exports.XmlStatementError = XmlStatementError;
module.exports.StageInstatiationError = StageInstatiationError;