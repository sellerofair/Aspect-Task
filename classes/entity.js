'use strict'

// Модуль в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

/**
 * Класс типа сущности
 */
class EntityType {

    constructor() { this.#openType = false; }

    #name;
    #openType;
    #keys;
    #properties;

    getName() { return this.#name; }
    getOpenType() { return this.#openType; }
    getKeys() { return this.#keys; }
    getProperties() { return this.#properties; }

    setName(name) { this.#name = name; }
    setOpenType(openType) { this.#openType = openType; }
    setKeys(keys) { this.#keys = keys; }
    setProperties(properties) { this.#properties = properties }
}

/**
 * Класс ключа
 */
class Key {

    constructor() {}

    #propertyRefs;

    getPropertyRefs() { return this.#propertyRefs; }

    setPropertyRefs(propertyRefs) { this.#propertyRefs = propertyRefs; }
}

/**
 * Класс ссылочного свойста
 */
class PropertyRef {

    constructor() {}

    #name;

    getName() { return this.#name; }

    setName(name) { this.#name = name; }
}

/**
 * Класс свойства
 */
class Property {

    constructor() {}

    #name;
    #type;
    #nullable;

    getName() { return this.#name; }
    getType() { return this.#type; }
    getNullable() { return this.#nullable; }

    setName(name) { this.#name = name; }
    setType(type) { this.#type = type }
    setNullable(nullable) { this.#nullable = nullable }
}

/**
 * Класс навигационного свойства
 */
class NavigationProperty {

    constructor() {}

    #name;
    #relationship;
    #fromRole;
    #toRole;

    getName() { return this.#name; }
    getRelationship() { return this.#relationship; }
    getFromRole() { return this.#fromRole; }
    getToRole() { return this.#toRole; }

    setName(name) { this.#name = name; }
    setRelationship(relationship) { this.#relationship = relationship; }
    setFromRole(fromRole) { this.#fromRole = fromRole; }
    setToRole(toRole) { this.#toRole = toRole; }
}

module.exports.EntityType = EntityType;
module.exports.Key = Key;
module.exports.PropertyRef = PropertyRef;
module.exports.Property = Property;
module.exports.NavigationProperty = NavigationProperty;