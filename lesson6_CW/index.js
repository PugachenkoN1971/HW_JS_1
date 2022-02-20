/**********************************************************************************/
/*
/*    1. Дано список імен.
/*       let n1 = 'Harry..Potter'
/*       let n2 = 'Ron---Whisley'
/*       let n3 = 'Hermione__Granger'
/*       Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
/*       let n1 = 'Harry Potter'
/*       let n2 = 'Ron Whisley'
/*       let n3 = 'Hermione Granger'
/*
/*    2. Створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
/*    3. Cтворити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
/*        числових значень. Відсортувати його за допомоги sort
/*    4. Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
/*         числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
/*    5. Створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої
/*         функції) .  за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
/*    6. Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого
/*         до меньшого, або навпаки в залежності від значення аргументу direction.
/*              let nums = [11,21,3];
/*               sortNums('ascending') // [3,11,21]
/*               sortNums('descending') // [21,11,3]
*****************************************************************************************************/
/*
/*    7. є масив
/*          let coursesAndDurationArray = [
/*                 {title: 'JavaScript Complex', monthDuration: 5},
/*                 {title: 'Java Complex', monthDuration: 6},
/*                 {title: 'Python Complex', monthDuration: 6},
/*                 {title: 'QA Complex', monthDuration: 4},
/*                 {title: 'FullStack', monthDuration: 7},
/*                 {title: 'Frontend', monthDuration: 4}
/*                  ];
/*      7.1.  Відсортувати його за спаданням за monthDuration
/*      7.2.  Відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
***********************************************************************************************/
document.write(`<h1>ClassWork #6</h1>`);
/*******************************************/
/*     1. Дано список імен.                */
/*         let n1 = 'Harry..Potter'        */
/*         let n2 = 'Ron---Whisley'        */
/*         let n3 = 'Hermione__Granger'    */
/*  Написати функцію, яка приймає будь яке */
/*  не валідне імя, та нормалізує його в   */
/*   наступнйи вигляд                      */
/*          let n1 = 'Harry Potter'        */
/*          let n2 = 'Ron Whisley'         */
/*          let n3 = 'Hermione Granger'    */
/*******************************************/
document.write(`<div><h3>____Задание №1____Дано список імен:</h3>
                     <h3>let n1 = 'Harry..Potter'</h3>
                     <h3>let n2 = 'Ron---Whisley'</h3>
                     <h3>let n3 = 'Hermione__Granger'</h3>
                     <h3>Написати функцію, яка приймає будь яке не валідне імя, 
                     та нормалізує його в наступнйи вигляд:</h3>
                     <h3>let n1 = 'Harry Potter'</h3>
                     <h3>let n2 = 'Ron Whisley'</h3>
                     <h3>let n3 = 'Hermione Granger'</h3>
                     <h3>______________________________________________________</h3>
</div>`);
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
const chistFoo = (str) => {
    let strProbel = [];
    if (str.includes('.')) {
        strProbel = str.replaceAll('.', ' ');
    } else if (str.includes('-')) {
        strProbel = str.replaceAll('-', ' ');
    } else if (str.includes('_')) {
        strProbel = str.replaceAll('_', ' ');
    }
    return strProbel;
}
document.write(`<h3>Строка до обработки: ${n1}</h3>`);
document.write(`<h3>Строка после обработки: ${chistFoo(n1)}</h3>`);
document.write(`<h3>Строка до обработки: ${n2}</h3>`);
document.write(`<h3>Строка после обработки: ${chistFoo(n2)}</h3>`);
document.write(`<h3>Строка до обработки: ${n3}</h3>`);
document.write(`<h3>Строка после обработки: ${chistFoo(n3)}</h3>`);
document.write(`<h3>_____________________________________________________</h3>`);
/* 2. Створити функцію, яка генерує масив рандомних числових цілих значень  */
/*     в діапазоні від 0 до 100. */
document.write(`<div><h3>____Задание №2____Створити функцію, яка генерує
                 масив рандомних числових цілих значень в діапазоні від 0 до 100.</h3></div>`);

const sluchChisla = (razmer) => {
    let i;
    let massSluchChisl = [];
    for (i = 0; i < razmer; i++) {
        massSluchChisl[i] = Math.floor(Math.random() * 100);
    }
    return massSluchChisl;
}
let massSluch = sluchChisla(10);
document.write(`<h3>${massSluch}</h3>`);
/* 3. Cтворити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих */
/*          числових значень. Відсортувати його за допомоги sort  */
document.write(`<div><h3>____Задание №3____Cтворити (або згенерувати, за допомоги 
  попередньої функції) масив рандомних цілих числових значень. Відсортувати його 
  за допомоги sort</h3></div>`);

document.write(`<h3>Массив, не отсортированный: ${massSluch}</h3>`);
console.log(massSluch);

let massOrderUp = massSluch.sort(function (a, b) {
    return a - b;
})
document.write(`<h3>Массив, отсортированный по возрастанию: ${massOrderUp}</h3>`);
console.log(massOrderUp);

let massOrderDoun = massSluch.sort(function (a, b) {
    return b - a;
})
document.write(`<h3>Массив, отсортированный по убыванию: ${massOrderDoun}</h3>`);
console.log(massOrderDoun);
/*  4. Створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих         */
/*     числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа   */
document.write(`<div><h3>____Задание №4____Створити (або згенерувати, за допомоги попередньої
 функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
  залишивши тільки парні числа</h3></div>`);
console.log('------------------------------------');
let massivChisel = [2, 5, 6, 4, 8, 55, 68, 9, 21, 64, 29, 33, 72, 64, 47, 74, 25, 36, 98];
document.write(`<h3>Массив чисел, из которого неодходимо выбрать четные:  
${massivChisel}</h3>`);
console.log(massSluch);
console.log('------------------------------------');
const filterFooChetnie = (element) => {
    if (element % 2) {
        return false;
    } else {
        return true;
    }
}
const filterFooNeChetnie = (element) => {
    if (element % 2) {
        return true;
    } else {
        return false;
    }
}
let massChetniChisla = massSluch.filter(filterFooChetnie);
let massivChiselOutChet = massivChisel.filter(filterFooChetnie);
let massivChiselOutNeChet = massivChisel.filter(filterFooNeChetnie);
document.write(`<h3>Массив четных чисел:  ${massivChiselOutChet}</h3>`);
document.write(`<h3>Массив нечетных чисел:  ${massivChiselOutNeChet}</h3>`);
console.log(massChetniChisla);
/* 5. Створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої  */
/*     функції) .  за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.     */
document.write(`<div><h3>____Задание №5____Створити масив рандомних цілих числових значень 
(або згенерувати, за допомоги попередньої функції) .  
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові. </h3></div>`);
const massIntToStr = () => {
    return 'stroka';
}
document.write(`<h3>Массив чисел до обработки:  ${massivChisel}</h3>`);
massivChisel = massivChisel.map(massIntToStr);
document.write(`<h3>Массив чисел после обработки:  ${massivChisel}</h3>`);
/*  6. Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого */
/*      до меньшого, або навпаки в залежності від значення аргументу direction.  */
/*        let nums = [11,21,3];  */
/*        sortNums('ascending') // [3,11,21]  */
/*        sortNums('descending') // [21,11,3] */
document.write(`<div><h3>____Задание №6____Створити функцію sortNums(direction), яка прймає масив
чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу
direction. let nums = [11,21,3]; 
sortNums('ascending') // [3,11,21] sortNums('descending') // [21,11,3] */</h3></div>`);
let massChis = [28, 65, 85, 15, 35, 29, 46, 17, 95, 24, 69, 75, 12];
function sortNums(direction) {
    if (direction === 'vozrastanie') {
        massChis = massChis.sort(function (a, b) {
            return a - b;
        })
    } else if (direction === 'umenshenia') {
        massChis = massChis.sort(function (a, b) {
            return b - a;
        })
    } else {
        return 1;
    }
}
console.log('---------------------------------------------------------------');
console.log(massChis);
document.write(`<h3>Массив для обработки: ${massChis}</h3>`);
sortNums('vozrastanie');
document.write(`<h3>Массив, отсортированный на возрастание: ${massChis}</h3>`);
console.log(massChis);
sortNums('umenshenia');
document.write(`<h3>Массив, отсортированный на убывание: ${massChis}</h3>`);
console.log(massChis);
/**********************************************************************
/*    7. є масив
/*          let coursesAndDurationArray = [
/*                 {title: 'JavaScript Complex', monthDuration: 5},
/*                 {title: 'Java Complex', monthDuration: 6},
/*                 {title: 'Python Complex', monthDuration: 6},
/*                 {title: 'QA Complex', monthDuration: 4},
/*                 {title: 'FullStack', monthDuration: 7},
/*                 {title: 'Frontend', monthDuration: 4}
/*                  ];
/*      7.1.  Відсортувати його за спаданням за monthDuration
************************************************************************/
let coursesAndDurationArray = [
                 {title: 'JavaScript Complex', monthDuration: 5},
                 {title: 'Java Complex', monthDuration: 6},
                 {title: 'Python Complex', monthDuration: 6},
                 {title: 'QA Complex', monthDuration: 4},
                 {title: 'FullStack', monthDuration: 7},
                 {title: 'Frontend', monthDuration: 4}
                  ];
















