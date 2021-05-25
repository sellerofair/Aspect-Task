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

        for (let field of fields) { this.addField(field); }
    }

    /** Добавляет новое поле в репозиторий.
     * 
     * @param { string } name Имя нового поля
     */
    addField(name) {

        // Добавление нового поля
        this[name] = [];
    }

    /** Удаление поля из репозитория по имени.
     * 
     * @param { string } name Имя поля для удаления
     */
    deleteField(name) {

        // Удаление поля
        delete this[name];
    }

    /** Возвращает экземпляр из поля по наименованию.
     * 
     * @param { string } field Откуда возвращать
     * @param { string } name Что возвращать
     * 
     * @returns { any } Экземпляр
     */
    getElementFromFieldByName(field, name) {

        for (let element of this[field.toLowerCase()]) {
            if (element.name.includes(name)) {
                return element;
            }
        }
    }
}

module.exports.Repository = Repository;