# Преобразование XML to JSON
## Задача

Есть файл с фрагментом метаданных из 1С Предприятие 8.3. в формате xml.

Необходимо:

* разработать функцию для преобразования xml в json;
* разработать функцию получения информации о сущности 1С по ее наименованию:
  Входные параметры - наименование сущности 1С. Например, Catalog_Организации
  Выходной результат - объект сущности 1С в формате JSON.
  Объект должен иметь следующую структуру:
```javascript
    entity = {
        name: string,           // наименование сущности
        type: string,           // тип сущности (Catalog, Document и т.д.). Извлекается из наименования
        keyProperties: array,   // массив наименований свойств, входящих в первичный ключ
        properties: array       // массив объектов-свойств сущности
    }
```
  Объект свойства сущности должен иметь следующую структуру:
```javascript
    propety = { 
        name: string,           // наименование свойства
        dataType: string,       // Тип данных
        required: boolean,      // Признак "обязательное"
        refName: string         // Наименование ссылочной сущности (для ссылочных свойств)
    }
```
Наименование ссылочной сущности получать через связи (см. раздел Association в xml-файле)
Исходные данные из файла можно "зашить" в коде.

## Реализация
### constants
**Папка с константами**
Содержит модуль **data**, который предоставляет доступ к ссылочной строке **testData** типа **LinkedString**.
Нужна для разгрузки основного файла **script**.
### entities
**Пакет для хранения данных**
Предоставляет доступ к классам всех сущностей, а также к классу **Repository**.
Более подробное описание см. [тут](./entities#readme).
### parser
**Пакет для парсинга XML**
Более подробное описание см. [тут](./parser#readme).
### script
**Основной модуль**
Содержит функции (и подфункции), являющиеся решением поставленной задачи.
#### addXmlToReposytory(repository, parser)
Добавляет в репозиторий данные из XML, на котором основан переданный парсер.
##### addAssociation(repository, parser)
Подфункция.
Добавляет ассоциацию в репозиторий.
###### addEnd(repository, parser)
Подфункция.
Добавляет роль в ассоциацию.
##### addEntity(repository, parser)
Подфункция.
Добавляет сущность в репозиторий.
###### addKey(entity, parser)
Подфункция.
Добавляет ключ в сущность.
###### addProperty(entity, parser)
Подфункция.
Добавляет свойство в сущность.
###### addNavigationProperty(entity, parser)
Подфункция.
Добавляет навигационное свойство в сущность.
