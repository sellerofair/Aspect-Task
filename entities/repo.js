'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/**
 * Класс репозитория.
 */
class Repository {

    constructor() {}

    /**
     * Создание репозитория из строки XML
     * 
     * @param {string} data Строка в формате XML
     */
    constructor(data) {
                                                                                            // TODO
    }

    #associations;
    #entities;

    getAssociations() { return this.#associations; }
    getEntities() { return this.#entities; }

    setAssociations(associations) { this.#associations = associations; }
    setEntities(entities) { this.#entities = entities; }

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