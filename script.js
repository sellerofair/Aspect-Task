'use strict'

// Использованы CommonJS модули для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { Repository } = require('./entities/repo');
const { Association, Begin, End } = require('./entities/association');
const { EntityType, Key, PropertyRef, Property, NavigationProperty } = require('./entities/entity');

const { XmlStatementError } = require('./parser/errors');
const { Parser, LinkedString } = require('./parser/parser');
const { Stage } = require('./parser/enums');

const { testData } = require('./constants/data');

let repository = new Repository(['associations', 'enities']);

let parser = new Parser(testData);

/** Добавление в репозиторий данных из XML,
 * на котором основан переданный парсер.
 * 
 * @param { Repository } repository Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
function addXmlToReposytory(repository, parser) {

    for (let stage of parser) {

        if (stage === Stage.OPENTAG) {

            switch (parser.getTagName()) {

                case 'Association':
                    addAssociation(repository, parser);

                case 'EntityType':
                    addEnity(repository, parser);

            }
        }
    }
}

/** Добавление Ассоциации в репозиторий.
 * 
 * @param { Repository } repository Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
 function addAssociation(repository, parser) {

    let association = new Association();
    association.setName(parser.getAttributes()[0].value);
    console.log(association);
    parser.next();
    let end = new Begin();
    let endAttributes = parser.getAttributes();
    end.setType(endAttributes[1].value);
    end.setMultiplicity(endAttributes[2].value);
    association.setBegin(end);

    parser.next();
    end = new End();
    endAttributes = parser.getAttributes();
    end.setType(endAttributes[1].value);
    end.setMultiplicity(endAttributes[2].value);
    association.setEnd(end);

    repository.getAssociations().push(association);

    parser.next();
}

/** Добавление Сущности в репозиторий.
 * 
 * @param { Repository } repository Целевой репозиторий
 * @param { Parser } parser Парсер необходимой строки
 */
 function addEnity(repository, parser) {

}

// addXmlToReposytory(repository, parser);

parser.next();
addAssociation(repository, parser);

parser.next();
addAssociation(repository, parser);

parser.next();
addAssociation(repository, parser);

console.log(repository.getContent()[0]);

// TODO Добавить для всего toJSON и to String