/*
1. Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.


2. У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.


3. Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

4. Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else


- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН


- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

*/




/*
1. Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.
*/
console.log('Start');
/*
let a1 = prompt('Введите первое число:', 1);
let a2 = prompt('Введите второе число:', 1);
let max;
if(a1>a2) {
    max=a1;
} else if(a1<a2) {
    max=a2;
} else if (a1===a2) {
    max='Числа равны';
}

alert(`a1= ${a1} a2=${a2}   Максимальное число: ${max}`);

/*
2. У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
*/
//alert('Подъезд_1');
/*
let flat_number = prompt('Введите номер квартиры:', 1);
console.log(flat_number);
if(1<=flat_number && flat_number<=20) {
    alert('Подъезд_1')
} else if(21<=flat_number && flat_number<=48) {
    alert('Подъезд_2')
} else if(49<=flat_number && flat_number<=90) {
    alert('Подъезд_3')
} else {
    alert('Квартиры с таким номером нет')
}

/*
3. Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення
   ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
*/
/*
let number = prompt('Введите число', 1);
if(number==10) {
    alert('ВІРНО')
} else {
    alert('НЕВІРНО')
}
/*****/

/*
4. Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else
*/

let x1;

//x1=20;
//x1='stroka';
//x1=true;
x1=[1, 2, 3, 'stroka'];

console.log(x1);

//
// switch (tips) {
//     case "number":
//         console.log("Числовой тип");
//         alert("Числовой тип");
//         break;
//     case "Apples":
//         console.log("Apples are $0.32 a pound.");
//         break;
//     case "Bananas":
//         console.log("Bananas are $0.48 a pound.");
//         break;
//     case "Cherries":
//         console.log("Cherries are $3.00 a pound.");
//         break;
//     case "Mangoes":
//     case "Papayas":
//         console.log("Mangoes and papayas are $2.79 a pound.");
//         break;
//     default:
//         console.log("Sorry, we are out of);
// }
//
// console.log("Is there anything else you'd like?");
