'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/** Класс ассоциации. */
class Association {

    constructor() { this.ends = []; }

    /** Наименование ассоциации.
     * @type { string }
     */
    name;

    /** Концы.
     * @type { End[] }
     */
    ends;
}

/** Класс конца. */
class End {

    constructor() {}

    /** Роль.
     * @type { string }
     */
    role;

    /** Тип.
     * @type { string }
     */
    type;

    /** Мультипликация.
     * @type { string }
     */
    multiplicity;

}

module.exports.Association = Association;
module.exports.End = End;