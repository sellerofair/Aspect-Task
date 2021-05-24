'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/** Класс репозитория. */
class Repository {

    /** Создает репозиторий с полями, имена которых указаны в массиве в качестве аргумента.
     * 
     * @param { string[] } fields Массив имен полей
     */
    constructor(fields) {

        this.#content = {};

        for (let field of fields) { this.addField(field); }
    }

    /** Содержимое репозитория */
    #content;

    /** Возвращает содержимое репозитория.
     * 
     * @returns { object } Содержимое репозитория
     */
    getContent() { return this.#content; }

    /** Добавляет новое поле в репозиторий.
     * 
     * @param { string } name Имя нового поля
     */
    addField(name) {

        /** Имя поля с заглавной буквы */
        let nameProper = name[0].toUpperCase() + name.slice(1);

        // Добавление нового поля
        this.#content[name] = [];
        
        // Добавление геттера для получения содержимого поля по имени
        this['get' + nameProper] = function() {
            return this.#content[name];
        }
    }

    /** Удаление поля из репозитория по имени.
     * 
     * @param { string } name Имя поля для удаления
     */
    deleteField(name) {

        /** Имя поля с заглавной буквы */
        let nameProper = name[0].toUpperCase() + name.slice(1);

        // Удаление поля
        delete this.#content[name];

        // Удаление геттера
        delete this['get' + nameProper];
    }

    /** Возвращает экземпляр сущности по ее наименованию.
     * 
     * @param { string } entityName Наименование сущности
     * 
     * @returns { RepoEntity } Экземпляр сущности
     */
    getEnityByName(entityName) {

                                                                                            // TODO
        let enity = new Entity();
        enity.setName(entityName);

        return enity;
    }
}

/** Представление сущности для возвращения из репозитория */
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