'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/**
 * Набор возможный событий при парсинге XML
 */
const stage = {
    
    WAITTAG: Symbol('WAITTAG'),             // Ожидание открытия тега (символа '>')
    TAG: Symbol('TAG'),                     // Чтение имени тега
    CLOSETAG: Symbol('CLOSETAG'),           // Чтение закрывающего тега
    WAITCONTENT: Symbol('WAITCONTENT'),     // Ожидание содержания внутри элемента
    CONTENT: Symbol('CONTENT'),             // Чтение содержания элемента
    WAITKEY: Symbol('WAITKEY'),             // Ожидание ключа атрибута
    KEY: Symbol('KEY'),                     // Чтение ключа атрибута
    WAITEQUAL: Symbol('WAITEQUAL'),         // Ожидание символа '='
    WAITVALUE: Symbol('WAITVALUE'),         // Ожидание значения атрибута
    VALUE: Symbol('VALUE'),                 // Чтение значения атрибута
    PROLOG: Symbol('PROLOG'),               // Чтение пролога
    COMMENT: Symbol('COMMENT')              // Чтение (пропуск комментария)
};

module.exports.stage = stage;