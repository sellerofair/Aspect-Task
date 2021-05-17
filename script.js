"use strict"

const testData = `			<Association Name="Catalog_Номенклатура_Parent">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ЕдиницаИзмерения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ВесЕдиницаИзмерения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ВидАлкогольнойПродукции">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыАлкогольнойПродукции"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ВидНоменклатуры">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ГруппаДоступа">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ГруппыДоступаНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ДлинаЕдиницаИзмерения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_Марка">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Марки"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_НаборУпаковок">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_НаборыУпаковок"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ГруппаФинансовогоУчета">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ГруппыФинансовогоУчетаНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_НоменклатураМногооборотнаяТара">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_Производитель">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Производители"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ПроизводительИмпортерДляДекларацийАлко">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Контрагенты"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_СкладскаяГруппа">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СкладскиеГруппыНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_СтавкаНДС">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СтавкиНДС"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ТоварнаяКатегория">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ТоварныеКатегории"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ФайлКартинки">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_НоменклатураПрисоединенныеФайлы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ФайлОписанияДляСайта">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_НоменклатураПрисоединенныеФайлы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ОбъемЕдиницаИзмерения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ХарактеристикаМногооборотнаяТара">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ХарактеристикиНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ПлощадьЕдиницаИзмерения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_СхемаОбеспечения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СхемыОбеспечения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_СпособОбеспеченияПотребностей">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СпособыОбеспеченияПотребностей"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ЦеноваяГруппа">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ЦеновыеГруппы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ШаблонЦенника">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ШаблоныЭтикетокИЦенников"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ЕдиницаДляОтчетов">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ШаблонЭтикетки">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ШаблоныЭтикетокИЦенников"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_СезоннаяГруппа">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СезонныеГруппы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КоллекцияНоменклатуры">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КоллекцииНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_РейтингПродаж">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_РейтингиПродажНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ГруппаАналитическогоУчета">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ГруппыАналитическогоУчетаНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КодТНВЭД">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КлассификаторТНВЭД"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КодОКВЭД">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КлассификаторВидовЭкономическойДеятельности"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КодОКП">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ОбщероссийскийКлассификаторПродукции"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ВладелецСерий">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ВладелецХарактеристик">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ВладелецТоварныхКатегорий">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыНоменклатуры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КодРаздел7ДекларацииНДС">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КодыОперацийРаздела7ДекларацииПоНДС"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КодОКВЭД2">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КлассификаторОКВЭД2"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_КодОКПД2">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КлассификаторОКПД2"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ДополнительныеРеквизиты_Свойство">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура_ДополнительныеРеквизиты"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.ChartOfCharacteristicTypes_ДополнительныеРеквизитыИСведения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ДрагоценныеМатериалы_ДрагоценныйМатериал">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура_ДрагоценныеМатериалы"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ДрагоценныеМатериалы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Номенклатура_ДрагоценныеМатериалы_ЕдиницаИзмерения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Номенклатура_ДрагоценныеМатериалы"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УпаковкиЕдиницыИзмерения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_Военкомат">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Военкоматы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ГоловнаяОрганизация">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ГрафикРаботы">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Календари"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ИндивидуальныйПредприниматель">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ФизическиеЛица"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_РегистрацияВНалоговомОргане">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_РегистрацииВНалоговомОргане"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_УдалитьТерриториальныеУсловияПФР">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УдалитьТерриториальныеУсловияПФР"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_УчетнаяЗаписьОбмена">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_УчетныеЗаписиДокументооборота"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_СтранаПостоянногоМестонахождения">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СтраныМира"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_СтранаРегистрации">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_СтраныМира"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ГрафикРаботыСотрудников">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ГрафикиРаботыСотрудников"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ФайлЛоготип">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ОрганизацииПрисоединенныеФайлы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ФайлФаксимильнаяПечать">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ОрганизацииПрисоединенныеФайлы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_КонтактнаяИнформация_Вид">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации_КонтактнаяИнформация"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыКонтактнойИнформации"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_КонтактнаяИнформация_ВидДляСписка">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации_КонтактнаяИнформация"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ВидыКонтактнойИнформации"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Организации_ДополнительныеРеквизиты_Свойство">
<End Role="Begin"
        Type="StandardODATA.Catalog_Организации_ДополнительныеРеквизиты"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.ChartOfCharacteristicTypes_ДополнительныеРеквизитыИСведения"
        Multiplicity="0..1"/>
</Association>
<Association Name="Catalog_Валюты_ОсновнаяВалюта">
<End Role="Begin"
        Type="StandardODATA.Catalog_Валюты"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Валюты"
        Multiplicity="0..1"/>
</Association>
        <Association Name="Document_СчетНаОплатуКлиенту_Организация">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Организации"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Валюта">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Валюты"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_БанковскийСчет">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_БанковскиеСчетаОрганизаций"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Касса">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Кассы"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Менеджер">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Пользователи"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Партнер">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Партнеры"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Контрагент">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_Контрагенты"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Договор">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ДоговорыКонтрагентов"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_КонтактноеЛицо">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_КонтактныеЛицаПартнеров"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_Руководитель">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ОтветственныеЛицаОрганизаций"
        Multiplicity="0..1"/>
</Association>
<Association Name="Document_СчетНаОплатуКлиенту_ГлавныйБухгалтер">
<End Role="Begin"
        Type="StandardODATA.Document_СчетНаОплатуКлиенту"
        Multiplicity="*"/>
<End Role="End"
        Type="StandardODATA.Catalog_ОтветственныеЛицаОрганизаций"
        Multiplicity="0..1"/>
</Association>
<EntityType Name="Catalog_Организации">
<Key>
    <PropertyRef Name="Ref_Key"/>
</Key>
<Property Name="Ref_Key"
        Type="Edm.Guid"
        Nullable="false"/>
<Property Name="Predefined"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="PredefinedDataName"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="DataVersion"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Description"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="DeletionMark"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ВидОбменаСКонтролирующимиОрганами"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Военкомат_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ГоловнаяОрганизация_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ГрафикРаботы_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ИНН"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ДатаРегистрации"
        Type="Edm.DateTime"
        Nullable="true"/>
<Property Name="ДополнительныйКодФСС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЕстьОбособленныеПодразделения"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ИндивидуальныйПредприниматель_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КодНалоговогоОргана"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ИностраннаяОрганизация"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ИПКодПодчиненностиФСС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ИПРегистрационныйНомерПФР"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ИПРегистрационныйНомерТФОМС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ИПРегистрационныйНомерФСС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодВСтранеРегистрации"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодНалоговогоОрганаПолучателя"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодОрганаПФР"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодОрганаФСГС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодОКОНХ"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодПоОКАТО"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодПоОКПО"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодПодчиненностиФСС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КрупнейшийНалогоплательщик"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="НаименованиеПолное"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеСокращенное"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеТерриториальногоОрганаПФР"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеТерриториальногоОрганаФСС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеИнострОрганизации"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеНалоговогоОргана"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ОбменКаталогОтправкиДанныхОтчетности"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ОбменКаталогПрограммыЭлектроннойПочты"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ОбменКодАбонента"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ОбособленноеПодразделение"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ОГРН"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КПП"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ПрименятьРайонныйКоэффициент"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ПрименятьСевернуюНадбавку"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="РайонныйКоэффициент"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="Префикс"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="РегистрационныйНомерФСС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="РегистрацияВНалоговомОргане_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="УдалитьТерриториальныеУсловияПФР_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="РегистрационныйНомерПФР"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="СвидетельствоДатаВыдачи"
        Type="Edm.DateTime"
        Nullable="true"/>
<Property Name="УчетнаяЗаписьОбмена_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КодОКВЭД"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеОКВЭД"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодОКОПФ"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="РегистрационныйНомерТФОМС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеОКОПФ"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодОКФС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="РайонныйКоэффициентРФ"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="СвидетельствоСерияНомер"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="СтранаПостоянногоМестонахождения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="СтранаРегистрации_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ГрафикРаботыСотрудников_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="НаименованиеОКФС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЦифровойИндексОбособленногоПодразделения"
        Type="Edm.Int64"
        Nullable="true"/>
<Property Name="ПроцентСевернойНадбавки"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ЮрФизЛицо"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЮридическоеФизическоеЛицо"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ФайлЛоготип_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ФайлФаксимильнаяПечать_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ДопускаютсяВзаиморасчетыЧерезГоловнуюОрганизацию"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ЗарегистрированВОЭЗ"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="КодОКВЭД2"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеОКВЭД2"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НаименованиеМеждународное"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="НеЗаполнятьПодразделенияВМероприятияхТрудовойДеятельности"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="КонтактнаяИнформация"
        Type="Collection(StandardODATA.Catalog_Организации_КонтактнаяИнформация_RowType)"
        Nullable="true"/>
<Property Name="ДополнительныеРеквизиты"
        Type="Collection(StandardODATA.Catalog_Организации_ДополнительныеРеквизиты_RowType)"
        Nullable="true"/>
<NavigationProperty Name="Военкомат"
        Relationship="StandardODATA.Catalog_Организации_Военкомат"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГоловнаяОрганизация"
        Relationship="StandardODATA.Catalog_Организации_ГоловнаяОрганизация"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГрафикРаботы"
        Relationship="StandardODATA.Catalog_Организации_ГрафикРаботы"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ИндивидуальныйПредприниматель"
        Relationship="StandardODATA.Catalog_Организации_ИндивидуальныйПредприниматель"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="РегистрацияВНалоговомОргане"
        Relationship="StandardODATA.Catalog_Организации_РегистрацияВНалоговомОргане"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="УдалитьТерриториальныеУсловияПФР"
        Relationship="StandardODATA.Catalog_Организации_УдалитьТерриториальныеУсловияПФР"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="УчетнаяЗаписьОбмена"
        Relationship="StandardODATA.Catalog_Организации_УчетнаяЗаписьОбмена"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СтранаПостоянногоМестонахождения"
        Relationship="StandardODATA.Catalog_Организации_СтранаПостоянногоМестонахождения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СтранаРегистрации"
        Relationship="StandardODATA.Catalog_Организации_СтранаРегистрации"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГрафикРаботыСотрудников"
        Relationship="StandardODATA.Catalog_Организации_ГрафикРаботыСотрудников"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ФайлЛоготип"
        Relationship="StandardODATA.Catalog_Организации_ФайлЛоготип"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ФайлФаксимильнаяПечать"
        Relationship="StandardODATA.Catalog_Организации_ФайлФаксимильнаяПечать"
        FromRole="Begin"
        ToRole="End"/>
</EntityType>
<EntityType Name="Catalog_Валюты">
<Key>
    <PropertyRef Name="Ref_Key"/>
</Key>
<Property Name="Ref_Key"
        Type="Edm.Guid"
        Nullable="false"/>
<Property Name="Predefined"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="PredefinedDataName"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="DataVersion"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Description"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Code"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="DeletionMark"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ЗагружаетсяИзИнтернета"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="НаименованиеПолное"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Наценка"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ОсновнаяВалюта_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ПараметрыПрописи"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ФормулаРасчетаКурса"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="СпособУстановкиКурса"
        Type="Edm.String"
        Nullable="true"/>
<NavigationProperty Name="ОсновнаяВалюта"
        Relationship="StandardODATA.Catalog_Валюты_ОсновнаяВалюта"
        FromRole="Begin"
        ToRole="End"/>
</EntityType>

        <EntityType Name="Catalog_Номенклатура"
    OpenType="true">
<Key>
    <PropertyRef Name="Ref_Key"/>
</Key>
<Property Name="Ref_Key"
        Type="Edm.Guid"
        Nullable="false"/>
<Property Name="Predefined"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="PredefinedDataName"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="DataVersion"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Description"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Code"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Parent_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="IsFolder"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="DeletionMark"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ЕдиницаИзмерения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Артикул"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ВариантОформленияПродажи"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ВесЕдиницаИзмерения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ВесЗнаменатель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ВесИспользовать"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ВесМожноУказыватьВДокументах"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ВесЧислитель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ВестиУчетПоГТД"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ВестиУчетСертификатовНоменклатуры"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ВидАлкогольнойПродукции_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ВидНоменклатуры_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ГруппаДоступа_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="АлкогольнаяПродукция"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="НаименованиеПолное"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЕдиницаИзмеренияСрокаГодности"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЕстьТоварыДругогоКачества"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ИмпортнаяАлкогольнаяПродукция"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ДлинаЕдиницаИзмерения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ДлинаЗнаменатель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ДлинаИспользовать"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ДлинаМожноУказыватьВДокументах"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ДлинаЧислитель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ИспользованиеХарактеристик"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ИспользоватьИндивидуальныйШаблонЦенника"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ИспользоватьИндивидуальныйШаблонЭтикетки"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ИспользоватьУпаковки"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="Качество"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КодДляПоиска"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Марка_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="НаборУпаковок_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ГруппаФинансовогоУчета_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="НоменклатураМногооборотнаяТара_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ОбъемДАЛ"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="Описание"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ПодакцизныйТовар"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ПоставляетсяВМногооборотнойТаре"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="Производитель_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ПроизводительИмпортерДляДекларацийАлко_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="СкладскаяГруппа_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="СрокГодности"
        Type="Edm.Int64"
        Nullable="true"/>
<Property Name="УдалитьСтавкаНДС"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="СтавкаНДС_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ТипНоменклатуры"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ТоварнаяКатегория_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ФайлКартинки_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ФайлОписанияДляСайта_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ОбъемЕдиницаИзмерения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ОбъемЗнаменатель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ОбъемИспользовать"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ОбъемМожноУказыватьВДокументах"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ОбъемЧислитель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ХарактеристикаМногооборотнаяТара_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ПлощадьЕдиницаИзмерения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ПлощадьЗнаменатель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="СхемаОбеспечения_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="СпособОбеспеченияПотребностей_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ПлощадьИспользовать"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ПлощадьМожноУказыватьВДокументах"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ПлощадьЧислитель"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ЦеноваяГруппа_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ШаблонЦенника_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ЕдиницаДляОтчетов_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КоэффициентЕдиницыДляОтчетов"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ШаблонЭтикетки_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="СезоннаяГруппа_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КоллекцияНоменклатуры_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Принципал"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Контрагент"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="РейтингПродаж_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ОбособленнаяЗакупкаПродажа"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ГруппаАналитическогоУчета_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КодТНВЭД_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КодОКВЭД_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КодОКП_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ОблагаетсяНДПИПоПроцентнойСтавке"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ВладелецСерий_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ВладелецХарактеристик_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ВладелецТоварныхКатегорий_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Крепость"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="ОсобенностьУчета"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ПродукцияМаркируемаяДляГИСМ"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="КиЗГИСМ"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="КиЗГИСМВид"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КиЗГИСМСпособВыпускаВОборот"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КиЗГИСМGTIN"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="КиЗГИСМРазмер"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ПодконтрольнаяПродукцияВЕТИС"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="АлкогольнаяПродукцияВоВскрытойТаре"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="КодРаздел7ДекларацииНДС_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ОблагаетсяНДСУПокупателя"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="КодОКВЭД2_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КодОКПД2_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ТабачнаяПродукция"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ОбувнаяПродукция"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="ДополнительныеРеквизиты"
        Type="Collection(StandardODATA.Catalog_Номенклатура_ДополнительныеРеквизиты_RowType)"
        Nullable="true"/>
<Property Name="ДрагоценныеМатериалы"
        Type="Collection(StandardODATA.Catalog_Номенклатура_ДрагоценныеМатериалы_RowType)"
        Nullable="true"/>
<Property Name="Принципал_Type"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Контрагент_Type"
        Type="Edm.String"
        Nullable="true"/>
<NavigationProperty Name="Parent"
        Relationship="StandardODATA.Catalog_Номенклатура_Parent"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ЕдиницаИзмерения"
        Relationship="StandardODATA.Catalog_Номенклатура_ЕдиницаИзмерения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ВесЕдиницаИзмерения"
        Relationship="StandardODATA.Catalog_Номенклатура_ВесЕдиницаИзмерения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ВидАлкогольнойПродукции"
        Relationship="StandardODATA.Catalog_Номенклатура_ВидАлкогольнойПродукции"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ВидНоменклатуры"
        Relationship="StandardODATA.Catalog_Номенклатура_ВидНоменклатуры"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГруппаДоступа"
        Relationship="StandardODATA.Catalog_Номенклатура_ГруппаДоступа"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ДлинаЕдиницаИзмерения"
        Relationship="StandardODATA.Catalog_Номенклатура_ДлинаЕдиницаИзмерения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Марка"
        Relationship="StandardODATA.Catalog_Номенклатура_Марка"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="НаборУпаковок"
        Relationship="StandardODATA.Catalog_Номенклатура_НаборУпаковок"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГруппаФинансовогоУчета"
        Relationship="StandardODATA.Catalog_Номенклатура_ГруппаФинансовогоУчета"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="НоменклатураМногооборотнаяТара"
        Relationship="StandardODATA.Catalog_Номенклатура_НоменклатураМногооборотнаяТара"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Производитель"
        Relationship="StandardODATA.Catalog_Номенклатура_Производитель"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ПроизводительИмпортерДляДекларацийАлко"
        Relationship="StandardODATA.Catalog_Номенклатура_ПроизводительИмпортерДляДекларацийАлко"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СкладскаяГруппа"
        Relationship="StandardODATA.Catalog_Номенклатура_СкладскаяГруппа"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СтавкаНДС"
        Relationship="StandardODATA.Catalog_Номенклатура_СтавкаНДС"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ТоварнаяКатегория"
        Relationship="StandardODATA.Catalog_Номенклатура_ТоварнаяКатегория"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ФайлКартинки"
        Relationship="StandardODATA.Catalog_Номенклатура_ФайлКартинки"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ФайлОписанияДляСайта"
        Relationship="StandardODATA.Catalog_Номенклатура_ФайлОписанияДляСайта"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ОбъемЕдиницаИзмерения"
        Relationship="StandardODATA.Catalog_Номенклатура_ОбъемЕдиницаИзмерения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ХарактеристикаМногооборотнаяТара"
        Relationship="StandardODATA.Catalog_Номенклатура_ХарактеристикаМногооборотнаяТара"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ПлощадьЕдиницаИзмерения"
        Relationship="StandardODATA.Catalog_Номенклатура_ПлощадьЕдиницаИзмерения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СхемаОбеспечения"
        Relationship="StandardODATA.Catalog_Номенклатура_СхемаОбеспечения"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СпособОбеспеченияПотребностей"
        Relationship="StandardODATA.Catalog_Номенклатура_СпособОбеспеченияПотребностей"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ЦеноваяГруппа"
        Relationship="StandardODATA.Catalog_Номенклатура_ЦеноваяГруппа"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ШаблонЦенника"
        Relationship="StandardODATA.Catalog_Номенклатура_ШаблонЦенника"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ЕдиницаДляОтчетов"
        Relationship="StandardODATA.Catalog_Номенклатура_ЕдиницаДляОтчетов"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ШаблонЭтикетки"
        Relationship="StandardODATA.Catalog_Номенклатура_ШаблонЭтикетки"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="СезоннаяГруппа"
        Relationship="StandardODATA.Catalog_Номенклатура_СезоннаяГруппа"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КоллекцияНоменклатуры"
        Relationship="StandardODATA.Catalog_Номенклатура_КоллекцияНоменклатуры"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="РейтингПродаж"
        Relationship="StandardODATA.Catalog_Номенклатура_РейтингПродаж"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГруппаАналитическогоУчета"
        Relationship="StandardODATA.Catalog_Номенклатура_ГруппаАналитическогоУчета"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КодТНВЭД"
        Relationship="StandardODATA.Catalog_Номенклатура_КодТНВЭД"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КодОКВЭД"
        Relationship="StandardODATA.Catalog_Номенклатура_КодОКВЭД"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КодОКП"
        Relationship="StandardODATA.Catalog_Номенклатура_КодОКП"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ВладелецСерий"
        Relationship="StandardODATA.Catalog_Номенклатура_ВладелецСерий"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ВладелецХарактеристик"
        Relationship="StandardODATA.Catalog_Номенклатура_ВладелецХарактеристик"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ВладелецТоварныхКатегорий"
        Relationship="StandardODATA.Catalog_Номенклатура_ВладелецТоварныхКатегорий"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КодРаздел7ДекларацииНДС"
        Relationship="StandardODATA.Catalog_Номенклатура_КодРаздел7ДекларацииНДС"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КодОКВЭД2"
        Relationship="StandardODATA.Catalog_Номенклатура_КодОКВЭД2"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КодОКПД2"
        Relationship="StandardODATA.Catalog_Номенклатура_КодОКПД2"
        FromRole="Begin"
        ToRole="End"/>
</EntityType>
<EntityType Name="Document_СчетНаОплатуКлиенту"
    OpenType="true">
<Key>
    <PropertyRef Name="Ref_Key"/>
</Key>
<Property Name="Ref_Key"
        Type="Edm.Guid"
        Nullable="false"/>
<Property Name="DataVersion"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Number"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Date"
        Type="Edm.DateTime"
        Nullable="true"/>
<Property Name="DeletionMark"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="Posted"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="Организация_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="СуммаДокумента"
        Type="Edm.Double"
        Nullable="true"/>
<Property Name="Валюта_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ДокументОснование"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ФормаОплаты"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="БанковскийСчет_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Касса_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ДополнительнаяИнформация"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЧастичнаяОплата"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="Аннулирован"
        Type="Edm.Boolean"
        Nullable="true"/>
<Property Name="Менеджер_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="НазначениеПлатежа"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Партнер_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Контрагент_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Комментарий"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="Договор_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="КонтактноеЛицо_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="Руководитель_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ГлавныйБухгалтер_Key"
        Type="Edm.Guid"
        Nullable="true"/>
<Property Name="ИдентификаторПлатежа"
        Type="Edm.String"
        Nullable="true"/>
<Property Name="ЭтапыГрафикаОплаты"
        Type="Collection(StandardODATA.Document_СчетНаОплатуКлиенту_ЭтапыГрафикаОплаты_RowType)"
        Nullable="true"/>
<Property Name="ДокументОснование_Type"
        Type="Edm.String"
        Nullable="true"/>
<NavigationProperty Name="Организация"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Организация"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Валюта"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Валюта"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="БанковскийСчет"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_БанковскийСчет"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Касса"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Касса"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Менеджер"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Менеджер"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Партнер"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Партнер"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Контрагент"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Контрагент"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Договор"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Договор"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="КонтактноеЛицо"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_КонтактноеЛицо"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="Руководитель"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_Руководитель"
        FromRole="Begin"
        ToRole="End"/>
<NavigationProperty Name="ГлавныйБухгалтер"
        Relationship="StandardODATA.Document_СчетНаОплатуКлиенту_ГлавныйБухгалтер"
        FromRole="Begin"
        ToRole="End"/>
</EntityType>`;

/** 
 * Исключение для обработки ошибок, связанных с неверным синтаксисом XML 
 */
class XmlStatementError extends Error {
    constructor() {
        super();
        this.message = 'Bad XML statement';
        this.name = 'XmlStatementError';
    }
}

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

    /**
     * Набор возможный событий при парсинге XML
     */
    const stage = {
        WAITTAG: Symbol('WAITTAG'),             // Ожидание открытия тега (символа '>')
        TAG: Symbol('TAG'),                     // Чтение имени тега
        CLOSETAG: Symbol('CLOSETAG'),           // Чтение закрывающего тега
        WAITCONTENT: Symbol('WAITCONTENT'),     // Ожидание содержания внутри элемента
        CONTENT: Symbol('CONTENT'),             // Чтение содержания элемента
        WAITKEY: Symbol('WAITKEY'),             // Ожидание ключа атрибута
        KEY: Symbol('KEY'),                     // Чтение ключа атрибута
        WAITEQUAL: Symbol('WAITEQUAL'),         // Ожидание символа '='
        WAITVALUE: Symbol('WAITVALUE'),         // Ожидание значения атрибута
        VALUE: Symbol('VALUE'),                 // Чтение значения атрибута
        PROLOG: Symbol('PROLOG'),               // Чтение пролога
        COMMENT: Symbol('COMMENT')              // Чтение (пропуск комментария)
    };

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

console.log(xml2json(testData));