/*********************************************************************************/
/*   1. Знайти та вивести довижину настипних стрінгових значень                  */
/*       'hello world', 'lorem ipsum', 'javascript is cool'                      */
/*   2. Перевести до великого регістру наступні стрінгові значення               */
/*       'hello world', 'lorem ipsum', 'javascript is cool'                      */
/*   3. Перевести до нижнього регістру настипні стрінгові значення               */
/*       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'                      */
/*   4. Є "брудна" стрінга let str = ' dirty string   ' .                        */
/*         Почистити її від зайвих пробілів.                                     */
/*   5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. */
/*       let str = 'Каждый охотник желает знать'; let arr = stringToarray(str);  */
/*        document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']     */
/*   6. Напишіть функцію delete_characters(str, length), яка повертає підрядок,  */
/*       що складається із зазначеної кількості символів.                        */
/*       let str = 'Каждый охотник желает знать';                                */
/*       document.writeln(delete_characters(str, 7)); // Каждый                  */
/*   7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент     */
/*       і вставляє тире (-) між словами. При цьому всі символи рядка необхідно  */
/*       перевести у верхній регістр. let str = "HTML JavaScript PHP";           */
/*       document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'            */
/*   8.  Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр    */
/*        першого символу рядка з нижнього регістру у верхній.                   */
/*   9.  Напишіть функцію capitalize(str), яка повертає рядок, у якому           */
/*          кожне слово починається з великої літери.                            */
/*********************************************************************************/
document.write(`<h1>HomeWork #6</h1>`);
console.log('HomeWork #6');
/*   1. Знайти та вивести довижину настипних стрінгових значень  */
/*       'hello world', 'lorem ipsum', 'javascript is cool'      */
document.write(`<h3>  Задание №1  Знайти та вивести довижину настипних 
стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'</h3>`);
let massStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
let i;
for (i = 0; i < massStr.length; i++) {
    document.write(`<h3> Размер элемента ${i + 1}
 массива равен ${massStr[i].length}</h3>`);
}
/*   2. Перевести до великого регістру наступні стрінгові значення               */
/*       'hello world', 'lorem ipsum', 'javascript is cool'                      */
document.write(`<h3>  Задание №2  Перевести до великого регістру наступні 
стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'</h3>`);
let massStrToUpCas = [];
for (i = 0; i < massStr.length; i++) {
    massStrToUpCas[i] = massStr[i].toUpperCase();
    document.write(`<h3>Элемент [${i + 1}] массива равен:  "${massStrToUpCas[i]}"</h3>`);
}
/*   3. Перевести до нижнього регістру настипні стрінгові значення  */
/*       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'         */
document.write(`<h3>  Задание №3  Перевести до нижнього регістру
 настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 
 'JAVASCRIPT IS COOL'</h3>`);
let massStrToLoCas = [];
for (i = 0; i < massStrToUpCas.length; i++) {
    massStrToLoCas[i] = massStrToUpCas[i].toLowerCase();
    document.write(`<h3>  ${massStrToLoCas[i]}</h3>`);
}
/*   4. Є "брудна" стрінга let str = ' dirty string   ' .  */
/*         Почистити її від зайвих пробілів.               */
document.write(`<h3>  Задание №4  Є "брудна" стрінга 
let str = ' dirty string   ' . Почистити її від зайвих пробілів.</h3>`);
console.log('___Задание__№4___');
let strChist = '        dirty string   ';
console.log(strChist, strChist.length);
document.write(`<h3>${strChist}__Размер строки равен:${strChist.length}</h3>`);
let strChist1 = strChist.trim();  /* Убираем лишнии пробелы */
console.log(strChist1, strChist1.length);
document.write(`<h3>${strChist1}__Размер строки равен:${strChist1.length}</h3>`);
/*   5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. */
/*       let str = 'Каждый охотник желает знать'; let arr = stringToarray(str);  */
/*        document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']     */
document.write(`<h3>  Задание №5  Напишіть функцію stringToarray(str), яка 
перетворює рядок на масив слів. let str = 'Каждый охотник желает знать'; 
let arr = stringToarray(str); document.writeln(arr); 
['Каждый', 'охотник', 'желает', 'знать']</h3>`);
let strIn = 'Каждый охотник желает знать где сидит фазан';
let strOut = strIn.split(' ');  /* Функция перевода строки в массив */
for (i = 0; i < strOut.length; i++) {
    document.write(`<h3>Элемент [${i + 1}] ===> ${strOut[i]}</h3>`);
}
/*   6. Напишіть функцію delete_characters(str, length), яка повертає підрядок,  */
/*       що складається із зазначеної кількості символів.                        */
/*       let str = 'Каждый охотник желает знать';                                */
/*       document.writeln(delete_characters(str, 7)); // Каждый                  */
document.write(`<h3>  Задание №6   Напишіть функцію delete_characters(str, length), 
яка повертає підрядок, що складається із зазначеної кількості символів.  
let str = 'Каждый охотник желает знать'; 
document.writeln(delete_characters(str, 7)); // Каждый </h3>`);
const delete_characters = (str, length1) => {
    return str.substr(0, length1);
}
let strOut1 = delete_characters(strIn, 6);
document.write(`<h3>${strOut1}</h3>`);
console.log(strOut1);
/*   7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент     */
/*       і вставляє тире (-) між словами. При цьому всі символи рядка необхідно  */
/*       перевести у верхній регістр. let str = "HTML JavaScript PHP";           */
/*       document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'            */
document.write(`<h3>  Задание №7   Напишіть функцію insert_dash(str), 
яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому
 всі символи рядка необхідно  перевести у верхній регістр. 
 let str = "HTML JavaScript PHP"; document.writeln(insert_dash(str)); 
  'HTML-JAVASCRIPT-PHP'</h3>`);
const insert_dash = (str) => {
    let strO = str.toUpperCase();
    strO = strO.replaceAll(' ', '-');
    return strO;
}
console.log('-----------------------------');
let str23 = "HTML JavaScript PHP";
console.log(str23);
console.log('-----------------------------');
let strOO = insert_dash(str23);
console.log(strOO);
document.write(`<div><h3>Строка до обработки:</h3>
                     <h4>${str23}</h4>
                     <h3>Строка после обработки:</h3>
                     <h4>${strOO}</h4></div>`);
/*   8.  Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр    */
/*        першого символу рядка з нижнього регістру у верхній.                   */
document.write(`<h3>  Задание №8   Напишіть функцію, яка приймає рядок як 
аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.</h3>`);

const upperFirstChar = (str) => {
    let firstChar = str.slice(0, 1);
    firstChar = firstChar.toUpperCase() + str.slice(1);
    return firstChar;
}
let fraza = 'хороший сисадмин ничего не делает, oн раз сделал и у него все работает.';
let frazaNew = upperFirstChar(fraza);
console.log(fraza);
console.log(frazaNew);
document.write(`<div><h3>Строка до обработки (первая буква предложения - строчная):</h3>
<h4>${fraza}</h4><h3>Строка после обработки (первая буква предложения - заглавная):</h3>
<h4>${frazaNew}</h4></div>`);
/*   9.  Напишіть функцію capitalize(str), яка повертає рядок, у якому  */
/*          кожне слово починається з великої літери.                   */
/************************************************************************/
document.write(`<h3>  Задание №9  Напишіть функцію capitalize(str), 
яка повертає рядок, у якому кожне слово починається з великої літери.</h3>`);
let massIn9='иван наталья john sarah андрей сергей виктория екатерина';
document.write(`<h3>Фраза до обработки:</h3><p>${massIn9}</p>`);
const capitalize = (str) => {
    let massStr = str.split(' ');
    let massOut = [];
    for (i = 0; i < massStr.length; i++) {
        massOut[i] = massStr[i].charAt(0).toUpperCase() + massStr[i].slice(1);
    }
    return massOut.join(' ');
}
let massOut9 = capitalize(massIn9);
console.log(capitalize(massIn9));
document.write(`<h3>Фраза после обработки:</h3><p>${massOut9}</p>`);







