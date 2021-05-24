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

// let repository = new Repository(['associations', 'enities']);

// let parser = new Parser(testData);

/**
 * Преобразует строку в формате XML в JS объект
 * 
 * @param {string} data Строка в формате XML
 * 
 * @throws {XmlStatementError} Неверный синтаксис
 */
function xml2json(repository, parser) {

// Задание начальных параметров => 

    let jsonObject = {};
    
    // Стек, хранящий путь к текущему объекту
    let stack = [
        {
            tag: 'ROOT',
            object: jsonObject
        }
    ];
    
    let currentStage = stage.WAITTAG;
    let tag = '';
    let content = '';
    let key = '';
    let value = '';
    let quote = '"';
    let isSpace;

// <= Задание начальных параметров

    for (let char of data) {

        // console.log('\n');
        // console.log(char);
        // console.log(stack);
        // console.log(currentStage);
        // console.log(`tag: '${tag}'\nkey: '${key}'\nvalue: '${value}'\ncontent: ${content}`);

        isSpace = /\s/.test(char);      // Проверка, является ли символ пробельным

        switch (currentStage) {

            case stage.WAITTAG:
                if (char === '<') { currentStage = stage.TAG; }                
                break;

            case stage.TAG:

                if (char === '>') {
                    addObject(stack, tag);
                    currentStage = stage.WAITCONTENT;
                    tag = '';
                    break;
                }

                if (isSpace) {
                    addObject(stack, tag);
                    currentStage = stage.WAITKEY;
                    tag = '';
                    break;
                }

                if (char === '/') {
                    if (tag.length != 0) {
                        addObject(stack, tag);
                        stack.pop();
                        currentStage = stage.WAITTAG;
                    } else { currentStage = stage.CLOSETAG; }

                    break;
                }

                if (char === '!') {
                    currentStage = stage.COMMENT;
                    break;
                }

                if (char === '?') {
                    currentStage = stage.PROLOG;
                    break;
                }

                tag += char;

                break;

            case stage.COMMENT:
                if (char === '>') {
                    currentStage = stage.WAITTAG;
                    break;
                }
                break;

            case stage.PROLOG:
                if (char === '>') {
                    currentStage = stage.WAITTAG;
                    break;
                }
                break;

            case stage.WAITKEY:

                if (char === '>') {
                    currentStage = stage.WAITCONTENT;
                    break;
                }

                if (char === '/') {
                    stack.pop();
                    currentStage = stage.WAITTAG;
                    break;
                }

                if (!isSpace) {
                    currentStage = stage.KEY;
                    key += char;
                    break;
                }

                break;

            case stage.KEY:
                if (char === '=') {
                    currentStage = stage.WAITVALUE;
                    break;
                }
                if (isSpace) {
                    currentStage = stage.WAITEQUAL;
                    break;
                }
                key += char;
                break;

            case stage.WAITEQUAL:
                if (!isSpace) {
                    if (char === '=') {
                        currentStage = stage.WAITVALUE;
                        break;
                    } else { throw new XmlStatementError(); }
                }
                break;
    
            case stage.WAITVALUE:
                if (char === '"' || char === "'") {
                    currentStage = stage.VALUE;
                    quote = char;
                }
                break;

            case stage.VALUE:
                if (char === quote) {
                    try {
                        stack[stack.length - 1].object[key] = JSON.parse(value);
                    } catch {
                        stack[stack.length - 1].object[key] = value;
                    }
                    key = '';
                    value = '';
                    currentStage = stage.WAITKEY;
                    break;
                }
                value += char;
                break;

            case stage.WAITCONTENT:
                if (char === '<') {
                    currentStage = stage.TAG;
                    break;
                }
                if (!isSpace) {
                    currentStage = stage.CONTENT;
                    content += char;
                    break;
                }
                break;
    
            case stage.CONTENT:
                if (char === '<') {
                    try {
                        stack[stack.length - 1].object["content"] = JSON.parse(content.trim());
                    } catch {
                        stack[stack.length - 1].object["content"] = content.trim();
                    }
                    currentStage = stage.TAG;
                    content = '';
                }
                content += char;
                break;

            case stage.CLOSETAG:
                if (char === '>') {
                    if (stack[stack.length - 1].tag === tag) {
                        stack.pop();
                        currentStage = stage.WAITTAG;
                        tag = '';
                        break;
                    } else { throw new XmlStatementError(); }
                }
                tag += char;
        }
    }

    return jsonObject;
};

let str = `
<A B="C">
    <D E = "F"/>
</A>`
// Создаем обертку для входящей строки. По возможности должна передаваться строка без промежуточных переменных.
const linkSrt = new LinkedString(str);
// Создаем экземпляр парсера.
let parser = new Parser(linkSrt);

for (let stage of parser) {
    console.log(stage);
    if (stage === Stage.OPENTAG) {
        console.log(parser.getTagName());
    }
}