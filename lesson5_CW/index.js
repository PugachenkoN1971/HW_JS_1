/********************************************************************************************/
/* Всі функції повинні бути описані стрілочним типом!!!!                                    */
/*  1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)        */
/*  2. Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)        */
/*  3. Створити функцію яка повертає найбільше число з масиву                               */
/*
- створити функцію яка повертає найменьше число з масиву
- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
 limit - аргумент, який характеризує кінцеве значення діапазону.
 */
/* - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*********************************************************************************************/

/*      1. Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)        */

const minFoo = (a, d, c) => {
    if ((a<d && a<c) || (a<=d) || a<=c)  {
        console.log('min=',a);
    } else if(b<a && b<c) {
        console.log('min=',b)
    } else if(c<a && c<b) {
        console.log('min=',c)
    } else if(a===b && a<c) {
        console.log('min=',b)
    }

}
minFoo(1,2,3);

















