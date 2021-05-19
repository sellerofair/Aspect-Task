'use strict'

// Если гарантируется верный синтаксис XML и конкретная структура данных
// необходимо использовать этот скрипт

// Импорт в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { Repository } = require('./entities/repo');
const { EntityType, Key, PropertyRef, Property, NavigationProperty } = require('./entities/entity');
const { Association, Begin, End } = require('./entities/association');

const { XmlStatementError } = require('./parser/errors');
const { stage } = require('./parser/enums');

const { testData } = require('./constants/data');

/**
 * Добавляет прочитанный объект
 * 
 * @param {object[]} stack Текущий стек объектов.
 * @param {string} tag Текущее имя тега.
 */
function addObject(stack, tag) {
    let currentObject = stack[stack.length - 1].object;
    if (tag in currentObject) { currentObject[tag].push({}); }
    else { currentObject[tag] = [{}]; }
    stack.push(
        {
            tag: tag,
            object: currentObject[tag][currentObject[tag].length - 1]
        }
    );
}

/**
 * Преобразует строку в формате XML в JS объект
 * 
 * @param {string} data Строка в формате XML
 * @returns {object} Объект, полученный из XML
 * @throws {XmlStatementError} Неверный синтаксис
 */
function xml2json(data) {

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

// let testObject = xml2json(`  
// <A B ="C" X ="Y">75
//     <D E="F"/>
// </A>
// <A B ="R" X="Z">
//     <D E="G"/>
//     <D E="K"/>
// </A>`);

// console.log(testObject);