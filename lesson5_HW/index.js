/**************************************************************************************/
/*    Всі функції повинні бути описані стрілочним типом!!!!  */
/*    1.  Створити функцію яка обчислює та повертає площу прямокутника висотою  */
/*    2.  Створити функцію яка обчислює та повертає площу кола  */
/*    3.  Створити функцію яка обчислює та повертає площу циліндру  */
/*    4.  Створити функцію яка приймає масив та виводить кожен його елемент  */
/*    5.  Створити функцію яка  створює параграф з текстом. Текст задати через аргумент */
/*    6.  Cтворити функцію яка  створює ul з трьома елементами li.  */
/*
  Текст li задати через аргумент всім однаковий
- створити функцію яка  створює ul з трьома елементами li. Текст li задати через
  аргумент всім однаковий. Кількість li визначається другим аргументом,
  який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
  та будує для них список

- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
  та виводить їх в документ. Для кожного об'єкту окремий блок.
 */
/***************************************************************************************/
document.write(`<h1>HomeWork #5</h1>`);
console.log('HomeWork #5');

/*    1.  Створити функцію яка обчислює та повертає площу прямокутника висотою  */
document.write(`<h3>____Задача №1____Створити функцію яка обчислює та повертає 
площу прямокутника висотою</h3>`);
const sqPr = (a, b) => {
    s = a * b;
    document.write(`<h3>Площадь прямоугольника равна: ${s}</h3>`);
    return s;
}
let sPr = sqPr(2, 3);
console.log('Площадь прямоугольника равна: ', sPr);
/*    2.  Створити функцію яка обчислює та повертає площу кола  */
document.write(`<h3>____Задача №2____Створити функцію яка обчислює та повертає площу кола</h3>`);
const sqKr = (r) => {
    s = Math.PI * Math.pow(r, 2);
    document.write(`<h3>Площадь круга равна: ${s}</h3>`);
    return s;
}
let sKr = sqKr(2);
console.log('Площадь круга равна: ', sKr);
/*    3.  Створити функцію яка обчислює та повертає площу циліндру  */
document.write(`<h3>____Задача №3____Створити функцію яка обчислює та повертає площу циліндру</h3>`);
const sqCil = (r, h) => {
    s = 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
    document.write(`<h3>Площадь цилиндра равна: ${s}</h3>`);
    return s;
}
let sCil = sqCil(2, 3);
console.log('Площадь цилиндра равна: ', sCil);
/*    4.  Створити функцію яка приймає масив та виводить кожен його елемент  */
document.write(`<h3>____Задача №4____Створити функцію яка приймає масив та виводить кожен його елемент</h3>`);
let masAr = [3, 5, 3, 7, 5, 89, 12, 41, 84, 56, 89, 21, 65];
const massAr = (mass) => {
    let j = 0;
    for (const i of mass) {
        j++;
        document.write(`<h3>Элемент ${j} равен: ${i}</h3>`);
    }
}
massAr(masAr);
/*    5.  Створити функцію яка  створює параграф з текстом. Текст задати через аргумент */
document.write(`<h3>____Задача №5____Створити функцію яка створює параграф з текстом. 
Текст задати через аргумент</h3>`);
const pVivod = (tex) => {
    document.write(`<p>${tex}</p>`);
}
let arg = 'Текст для вывода';
pVivod(arg);
pVivod('Задача №5 выполнена');
/*    6.  Cтворити функцію яка  створює ul з трьома елементами li.  */
document.write(`<h3>____Задача №6____Cтворити функцію яка  створює ul з трьома елементами li.</h3>`);
const fooUl = (mass) => {
    let i;
    document.write(`<ul>`);
    for(i=0;i<mass.length;i++) {
        document.write(`<li>${mass[i]}</li>`);
    }
    document.write(`</ul>`);
}
tovari=['Чай','Кофе','Fanta','Pepsi kola','Coca kola','Яблочный сок'];
fooUl(tovari);
















































