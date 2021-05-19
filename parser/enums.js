'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/**
 * Набор возможных событий при парсинге XML.
 * Поля не должны изменяться при использовании класса.
 */
class Stage {

    constructor() {

          throw new Error('Stage is enumerated type and can\'t be instantiated.');
    }

    static WAITTAG = Symbol('WAITTAG');             // Ожидание открытия тега (символа '>')
    static TAG = Symbol('TAG');                     // Чтение имени тега
    static CLOSETAG = Symbol('CLOSETAG');           // Чтение закрывающего тега
    static WAITCONTENT = Symbol('WAITCONTENT');     // Ожидание содержания внутри элемента
    static CONTENT = Symbol('CONTENT');             // Чтение содержания элемента
    static WAITKEY = Symbol('WAITKEY');             // Ожидание ключа атрибута
    static KEY = Symbol('KEY');                     // Чтение ключа атрибута
    static WAITEQUAL = Symbol('WAITEQUAL');         // Ожидание символа '='
    static WAITVALUE = Symbol('WAITVALUE');         // Ожидание значения атрибута
    static VALUE = Symbol('VALUE');                 // Чтение значения атрибута
    static PROLOG = Symbol('PROLOG');               // Чтение пролога
    static COMMENT = Symbol('COMMENT');             // Чтение (пропуск комментария)
};

module.exports.Stage = Stage;