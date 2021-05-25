'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { Repository } = require('./entities/repository');
const { Association, End } = require('./entities/association');
const { EntityType, Key, PropertyRef, Property, NavigationProperty } = require('./entities/entity');

const { Parser } = require('./parser/parser');
const { Stage } = require('./parser/enums');

const { testData } = require('./constants/data');

let repository = new Repository(['associations', 'entities']);

let parser = new Parser(testData);

/** Добавление в репозиторий данных из XML,
 * на котором основан переданный парсер.
 * 
 * @param { Repository } repository Куда добавлять
 * @param { Parser } parser Откуда добавлять
 */
function addXmlToReposytory(repository, parser) {

    for (let _ of parser) {

        switch (parser.getTagName()) {

            case 'Association':
                addAssociation(repository, parser);
                break;

            case 'EntityType':
                addEntity(repository, parser);
                break;

        }
    }
}

/** Добавление Ассоциации в репозиторий.
 * 
 * @param { Repository } repository Куда добавлять
 * @param { Parser } parser Откуда добавлять
 */
function addAssociation(repository, parser) {

    let association = new Association();
    association.name = parser.getAttributes()[0].value;
    
    while (!(parser.next().value === Stage.CLOSETAG && parser.getTagName() === 'Association')) {

        addEnd(association, parser);
    }

    repository.associations.push(association);
}

/** Добавление роли в ассоциацию.
 * 
 * @param { Association } association Куда добавлять
 * @param { Parser } parser Откуда добавлять
 */
function addEnd(association, parser) {

    let attributes = parser.getAttributes();
    let end = new End();

    end.role = attributes[0].value;
    end.type = attributes[1].value;
    end.multiplicity = attributes[2].value;

    association.ends.push(end);
}

/** Добавление Сущности в репозиторий.
 * 
 * @param { Repository } repository Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
function addEntity(repository, parser) {

    let entity = new EntityType();
    let attributes = parser.getAttributes()
    entity.name = attributes[0].value;

    if (attributes.length > 1 && attributes[1].value) {
        entity.openType = true;
    }

    while (!(parser.next().value === Stage.CLOSETAG && parser.getTagName() === 'EntityType')) {

        switch (parser.getTagName()) {

            case 'Key':
                addKey(entity, parser);
                break;

            case 'Property':
                addProperty(entity, parser);
                break;

            case 'NavigationProperty':
                addNavigationProperty(entity, parser);
                break;

        }
    }

    repository.entities.push(entity);
}

/** Добавление ключа в сущность.
 * 
 * @param { EntityType } entity Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
function addKey(entity, parser) {

    let key = new Key();

    while (!(parser.next().value === Stage.CLOSETAG && parser.getTagName() === 'Key')) {
        let propertyRef = new PropertyRef();
        propertyRef.name = parser.getAttributes()[0].value;
        key.propertyRefs.push(propertyRef);
    }

    entity.keys.push(key);
}

/** Добавление свойства в сущность.
 * 
 * @param { EntityType } entity Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
function addProperty(entity, parser) {

    let attributes = parser.getAttributes();
    let property = new Property();

    property.name = attributes[0].value;
    property.type = attributes[1].value;
    property.nullable = attributes[2].value;

    entity.properties.push(property);
}

/** Добавление навигационного свойства в сущность.
 * 
 * @param { EntityType } entity Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
function addNavigationProperty(entity, parser) {

    let attributes = parser.getAttributes();
    let navigationProperty = new NavigationProperty();

    navigationProperty.name = attributes[0].value;
    navigationProperty.relationship = attributes[1].value;
    navigationProperty.fromRole = attributes[2].value;
    navigationProperty.toRole = attributes[3].value;

    entity.navigationProperties.push(navigationProperty);
}

addXmlToReposytory(repository, parser);

console.log(repository.getElementFromFieldByName('entities', 'Валюты'));