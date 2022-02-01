
/* */
let massiv = [34, 65, 54, [23, 86, 43, 93, 'all'], 21, 'finger', 23, 63, 'run', 86];
console.log(massiv[0]);
console.log(massiv[1]);
console.log(massiv[2]);
console.log(massiv[3]);
console.log(massiv[4]);
console.log(massiv[5]);
console.log(massiv[6]);
console.log(massiv[7]);
console.log(massiv[8]);
console.log(massiv[9]);
console.log('________________');
console.log('________________');
console.log(massiv[3][3]);

/* 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
 Скласти результат цих чисел в змінній result. */

let massiv1 = [34, 65, 54, 69, 21, 99, 23, 63, 11, 86];
let result;
console.log(massiv1[0]);
console.log(massiv1[1]);
console.log(massiv1[2]);
console.log(massiv1[3]);
console.log(massiv1[4]);
console.log(massiv1[5]);
console.log(massiv1[6]);
console.log(massiv1[7]);
console.log(massiv1[8]);
console.log(massiv1[9]);

result=massiv1[0]+massiv1[1]+massiv1[2]+massiv1[3]+massiv1[4]+massiv1[5]+massiv1[6]+massiv1[7]+massiv1[8]+massiv1[9];
console.log('Summa massiva:');
console.log(result);

/* 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр */

let book = {
    name: "To be or not to be",
    kolichestvo: 30,
    dganr: 'poem'
};

console.log(book.name);
console.log(book.kolichestvo);
console.log(book.dganr);

/* Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори  */

let book_1 = {
    name: "To be or not to be",
    kolichestvo: 30,
    dganr: 'poem',
    avtor: 'William Shakespeare'
};
console.log(book_1.avtor);

/* 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
 Вивести кожну книгу як окремий об'єкт */

let book_2 = [
    {
        name: "To be or not to be",
        kolichestvo: 500,
        dganr: 'poem',
        avtor: 'William Shakespeare'
    },
    {
        name: "World finance",
        kolichestvo: 800,
        dganr: 'Science',
        avtor: 'Jhon Wall'
    },
    {
        name: "Piople",
        kolichestvo: 450,
        dganr: 'documentaries',
        avtor: 'Ivon Beliw'
    },
    {
        name: "Forbes",
        kolichestvo: 200,
        dganr: 'financial and economic journal',
        avtor: 'Steve Forbes'
    },
];

console.log(book_2[1].name);
document.write('=================================');
  for (let i=0; i<5; i++) {
      document.write(
          `<div>
               <h2>${i+1}</h2>
               <h2>${book_2[i].name}</h2>
               <h2>${book_2[i].kolichestvo}</h2>
               <h2>${book_2[i].dganr}</h2>
               <h2>${book_2[i].avtor}</h2>                
        </div>`);
      document.write('============================');
      }
/*   5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height)
        та шириною 10см (змінна width). Значення площі зберігати в змінній s.
 */

   let height=23;
   let width=10;
