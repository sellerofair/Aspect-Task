'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/**
 * Класс ассоциации
 */
class Association {

    constructor() {}

    #name;
    #begin;
    #end;

    getName() { return this.#name; }
    getBegin() { return this.#begin; }
    getEnd() { return this.#end; }

    setName(name) { this.#name = name; }
    setBegin(begin) { this.#begin = begin; }
    setEnd(end) { this.#end = end; }
}

/**
 * Класс роли
 */
class Role {

    constructor() {}

    #type;
    #multiplicity;

    getType() { return this.#type; }
    getMultiplicity() { return this.#multiplicity; }

    setType(type) { this.#type = type }
    setMultiplicity(multiplicity) { this.#multiplicity = multiplicity }
}

/**
 * Класс начала
 * 
 * @extends Role
 */
class Begin extends Role {

    constructor() { super(); }
}

/**
 * Класс конца
 * 
 * @extends Role
 */
class End extends Role {

    constructor() { super(); }
}

module.exports.Association = Association;
module.exports.Begin = Begin;
module.exports.End = End;