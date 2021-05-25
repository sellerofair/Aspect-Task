'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { StageInstatiationError } = require('./errors');

/** Набор возможных событий при парсинге XML.
 * Поля не должны изменяться при использовании класса.
 */
class Stage {

    constructor() { throw new StageInstatiationError(); }

    static WAITTAG = Symbol('WAITTAG');             // Ожидание открытия тега (символа '<')
    static TAG = Symbol('TAG');                     // Чтение тега
    static OPENTAG = Symbol('OPENTAG');             // Прочитан открывающий тег
    static CLOSETAG = Symbol('CLOSETAG');           // Прочитан закрывающий тег
    static SINGLETAG = Symbol('SINGLETAG');         // Прочитан одиночный тег
    static WAITCONTENT = Symbol('WAITCONTENT');     // Ожидание содержания внутри элемента
    static CONTENT = Symbol('CONTENT');             // Прочитано содержание элемента
    static WAITKEY = Symbol('WAITKEY');             // Ожидание ключа атрибута
    static KEY = Symbol('KEY');                     // Чтение ключа атрибута
    static WAITEQUAL = Symbol('WAITEQUAL');         // Ожидание символа '='
    static WAITVALUE = Symbol('WAITVALUE');         // Ожидание значения атрибута
    static VALUE = Symbol('VALUE');                 // Чтение значения атрибута
    static PROLOG = Symbol('PROLOG');               // Чтение пролога
    static COMMENT = Symbol('COMMENT');             // Чтение (пропуск) комментария
};

module.exports.Stage = Stage;