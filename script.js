/*
1 задание

Придумайте самый короткий код для проверки, пуст ли элемент elem.

«Пустой» — значит нет дочерних узлов, даже текстовых.

if (/*...ваш код проверки elem... */) { узел elem пуст } Что написать в условии if ?*/


    if (document.body.childNodes==null) { console.log('Any elements here')} else {console.log('Some elements')}

/*
 2 задание

 Создайте таблицу с 10 стороками и столбцами!

 Напишите код, который выделит все ячейки в таблице по диагонали.

 Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:


 // в переменной td DOM-элемент для тега <td>
 td.style.backgroundColor = 'red';
 */


function tableCreate() {
    //body reference
    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // cells creation
    for (var j = 0; j <= 9; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = 0; i <=9; i++) {
            // create element <td> and text node
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            //var cellText = document.createTextNode("cell is row "+j+", column "+i);
            cell.setAttribute("width", "20px");
            cell.setAttribute("height", "20px");

            //cell.appendChild(cellText);
            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to
    tbl.setAttribute("border", "2");

    //document.querySelector('body').style.backgroundColor = 'red';
    var table = document.body.querySelector('table');
    for (i=0;i<10; i++) {
        table.rows[i].cells[i].style.backgroundColor = 'red';

    }
}
tableCreate();




/*3 задание
     Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль
 числа от 1 до 20, с интервалом между числами 100мс.
 То есть, весь вывод должен занимать 2000мс,
 в течение которых каждые 100мс в консоли появляется очередное число.*/

function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}

// вызов
printNumbersInterval();


/*
 4 задание

 Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID

createSpanInBlockByID('myBlock') // создаст span в блоке с id='myBlock'

 P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!*/
var createSpanInBlockByID   = function (blockID) {

    if  (document.getElementById('blockID')==null) {
        document.getElementById('blockID').appendChild(document.createSpanInBlockByID('myBlock');

    }
}

var checkID=prompt('Enter ID')
createSpanInBlockByID(checkID);


/*5 задание

 Создайте функцию createCloneNode(block) которая которая будет клонировать передаваемый ей элемент
  и добавять его в конец страницы!*/
var block = document.createElement('div');
var createCloneNode(block) = function (block) {
    var block2 = document.body.appendChild(block.cloneNode(true));

    createCloneNode(block);

}

/*6 задание

 Создайте функцию addChildrenTo(block, count, type) которая будет создавать
 внутри block count количество детей типа type
 ( type это будет тип блока например 'span, ul, li, div' и т.д. )*/


var addChildrenTo = function (block, count, type) {

    for (i=1;i<=count;i++)
    {
        document.querySelector(block).appendChild(document.createElement(type));

    }
}

var count=prompt('Enter numer of children');
var type = prompt('Enter type of children');
var block = prompt('Enter type of block you want to append children');


addChildrenTo(count, type, block);

/*7 задание

 Напишите функцию replaceElBy(blockCurrent, blockToReplace)
  которая будет заменять blockCurrent на blockToReplace и
  выводить сообщение пользователю после успешного проведения операции!*/

var  blockCurrent=document.getElementsByClassName('old')
var  blockToReplace=document.createElement('div');
blockToReplace.setAttribute('class','new');

console.log(blockCurrent);
console.log(blockToReplace);

var replaceElBy = function(blockCurrent, blockToReplace) {

    document.body.replaceChild(blockToReplace,blockCurrent);
    if (document.getElementsByClassName('new')==null)
    {
        alert('Не получилось')
    }
    else
    {
        alert('Замена осуществлена успешно!')
    }
}

var blockCurrent=prompt('Enter an old block');
var blockToReplace = prompt('Enter a new block');

replaceElBy(blockCurrent, blockToReplace);
