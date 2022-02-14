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
/*

- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.



- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

 */
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
//console.log(strChist.length);
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
    let str1 = str.substr(0, length1);
    return str1;
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
  'HTML-JAVASCRIPT-PHP' </h3>`);
const insert_dash = (str) => {
    let strO = str.toUpperCase();
    return strO;
}
console.log('-----------------------------');
let str23 = "HTML JavaScript PHP";
console.log(str23);
console.log('-----------------------------');
let strOO = insert_dash(str23);
console.log(strOO);








