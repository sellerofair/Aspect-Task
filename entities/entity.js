'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/** Класс типа сущности */
class EntityType {

    constructor() {
        this.openType = false;
        this.keys = [];
        this.properties = [];
        this.navigationProperties = [];
    }

    /** Наименование сущности.
     * @type { string }
     */
    name;

    /** Является ли сущность открытым типом.
     * @type { boolean }
     */
    openType;

    /** Ключи.
     * @type { Key[] }
     */
    keys;

    /** Свойства.
     * @type { Property[] }
     */
    properties;

    /** Навигационные свойства.
     * @type { NavigationProperty[] }
     */
    navigationProperties;
}

/** Класс ключа */
class Key {

    constructor() { this.propertyRefs = []; }

    /** Ссылки свойств.
     * @type { PropertyRef[] }
     */
    propertyRefs;
}

/** Класс ссылочного свойста */
class PropertyRef {

    constructor() {}

    /** Наименование сущности.
     * @type { string }
     */
    name;
}

/** Класс свойства */
class Property {

    constructor() {}

    /** Наименование свойства.
     * @type { string }
     */
    name;
    
    /** Тип свойства.
     * @type { string }
     */
    type;

    /** Может быть пустым.
     * @type { boolean }
     */
    nullable;
}

/** Класс навигационного свойства */
class NavigationProperty {

    constructor() {}

    /** Наименование свойства.
     * @type { string }
     */
    name;

    /** Отношение.
     * @type { string }
     */
    relationship;

    /** Наименование свойства.
     * @type { string }
     */
    fromRole;

    /** Наименование свойства.
     * @type { string }
     */
    toRole;
}

module.exports.EntityType = EntityType;
module.exports.Key = Key;
module.exports.PropertyRef = PropertyRef;
module.exports.Property = Property;
module.exports.NavigationProperty = NavigationProperty;