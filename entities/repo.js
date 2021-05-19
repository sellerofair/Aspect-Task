'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/**
 * Класс репозитория.
 */
class Repository {

    /**
     * Создает репозиторий с полями, имена которых указаны в массиве в качестве аргумента
     * 
     * @param {string[]} fields Массив имен полей
     */
    constructor(fields) {

        this.#content = {};

        for (let field of fields) { this.addField(field); }
    }

    #content;

    addField(name) {

        // имя поля с заглавной буквы
        let nameProper = name[0].toUpperCase() + name.slice(1);

        // новое поле
        this.#content[name] = [];
        
        // геттер
        this['get' + nameProper] = function() {
            return this.#content[name];
        }
    }

    deleteField(name) {

        // имя поля с заглавной буквы
        let nameProper = name[0].toUpperCase() + name.slice(1);

        delete this.#content[name];
        delete this['get' + nameProper];
    }

    getContent() { return this.#content; }

    /**
     * Возвращает экземпляр сущности по ее наименованию
     * 
     * @param {string} entityName Наименование сущности
     * @returns {RepoEntity} Экземпляр сущности
     */
    getEnityByName(entityName) {

                                                                                            // TODO
        let enity = new Entity();
        enity.setName(entityName);

        return enity;
    }
}

/**
 * Представление сущности для возвращения из репозитория
 */
class RepoEntity {

    constructor() {}

    #name;
    #type;
    #keyProperties;
    #properties;

    getName() { return this.#name; }
    getType() { return this.#type; }
    getKeyProperties() { return this.#keyProperties; }
    getProperties() { return this.#properties; }

    setName(name) { this.#name = name; }
    setType(type) { this.#type = type; }
    setKeyProperties(keyProperties) { this.#keyProperties = keyProperties; }
    setProperties(properties) { this.#properties = properties }
}

module.exports.Repository = Repository;
module.exports.RepoEntity = RepoEntity;