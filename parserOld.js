'use strict'

// Создание абстрактного объекта без использования классов

// Импорт в формате CommonJS для тестов в NodeJS.
// Если есть возможность, можно переделать на ES6.

const { XmlStatementError } = require('./parser/errors');
const Stage  = require('./parser/enums').OldStage;

const { testData } = require('./constants/data');

/**
 * Добавляет прочитанный объект
 * 
 * @param {object[]} stack Текущий стек объектов.
 * @param {string} tag Текущее имя тега.
 * 
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

    let currentStage = Stage.WAITTAG;
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

            case Stage.WAITTAG:
                if (char === '<') { currentStage = Stage.TAG; }                
                break;

            case Stage.TAG:

                if (char === '>') {
                    addObject(stack, tag);
                    currentStage = Stage.WAITCONTENT;
                    tag = '';
                    break;
                }

                if (isSpace) {
                    addObject(stack, tag);
                    currentStage = Stage.WAITKEY;
                    tag = '';
                    break;
                }

                if (char === '/') {
                    if (tag.length != 0) {
                        addObject(stack, tag);
                        stack.pop();
                        currentStage = Stage.WAITTAG;
                    } else { currentStage = Stage.CLOSETAG; }

                    break;
                }

                if (char === '!') {
                    currentStage = Stage.COMMENT;
                    break;
                }

                if (char === '?') {
                    currentStage = Stage.PROLOG;
                    break;
                }

                tag += char;

                break;

            case Stage.COMMENT:
                if (char === '>') {
                    currentStage = Stage.WAITTAG;
                    break;
                }
                break;

            case Stage.PROLOG:
                if (char === '>') {
                    currentStage = Stage.WAITTAG;
                    break;
                }
                break;

            case Stage.WAITKEY:

                if (char === '>') {
                    currentStage = Stage.WAITCONTENT;
                    break;
                }

                if (char === '/') {
                    stack.pop();
                    currentStage = Stage.WAITTAG;
                    break;
                }

                if (!isSpace) {
                    currentStage = Stage.KEY;
                    key += char;
                    break;
                }

                break;

            case Stage.KEY:
                if (char === '=') {
                    currentStage = Stage.WAITVALUE;
                    break;
                }
                if (isSpace) {
                    currentStage = Stage.WAITEQUAL;
                    break;
                }
                key += char;
                break;

            case Stage.WAITEQUAL:
                if (!isSpace) {
                    if (char === '=') {
                        currentStage = Stage.WAITVALUE;
                        break;
                    } else { throw new XmlStatementError(); }
                }
                break;
    
            case Stage.WAITVALUE:
                if (char === '"' || char === "'") {
                    currentStage = Stage.VALUE;
                    quote = char;
                }
                break;

            case Stage.VALUE:
                if (char === quote) {
                    try {
                        stack[stack.length - 1].object[key] = JSON.parse(value);
                    } catch {
                        stack[stack.length - 1].object[key] = value;
                    }
                    key = '';
                    value = '';
                    currentStage = Stage.WAITKEY;
                    break;
                }
                value += char;
                break;

            case Stage.WAITCONTENT:
                if (char === '<') {
                    currentStage = Stage.TAG;
                    break;
                }
                if (!isSpace) {
                    currentStage = Stage.CONTENT;
                    content += char;
                    break;
                }
                break;
    
            case Stage.CONTENT:
                if (char === '<') {
                    try {
                        stack[stack.length - 1].object["content"] = JSON.parse(content.trim());
                    } catch {
                        stack[stack.length - 1].object["content"] = content.trim();
                    }
                    currentStage = Stage.TAG;
                    content = '';
                }
                content += char;
                break;

            case Stage.CLOSETAG:
                if (char === '>') {
                    if (stack[stack.length - 1].tag === tag) {
                        stack.pop();
                        currentStage = Stage.WAITTAG;
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

console.log(xml2json(testData.text));