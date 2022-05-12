console.log('HomeWork #7');
document.write(`<h1>HomeWork #7</h1>`);

/**********************************************************************************************************************

 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 створити пустий масив, наповнити його 10 об'єктами new User(....)

 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

 4. створити класс для об'єктів Client з полями id, name, surname , email, phone,
 order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client

 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


 - (Те саме, тільки через клас)
 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

 *********************************************************************************************************************/
/*  1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone  */
/*       створити пустий масив, наповнити його 10 об'єктами new User(....)                       */
console.log('_______________________');

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(98, 'Oleg', 'Ivaniuk', 'oleg.ivanov@gmail.com', '+380 50 641 6598');
const user2 = new User(83, 'Irina', 'Petuhova', 'irina.petuhova@gmail.com', '+380 67 621 3254');
const user3 = new User(54, 'Aleksei', 'Levchenko', 'aleksei.levchenko@gmail.com', '+380 93 563 2489');
const user4 = new User(37, 'Sergei', 'Dyma', 'sergei.dyma@gmail.com', '+380 50 326 4189');
const user5 = new User(69, 'Natalia', 'Silver', 'natalia.silver@gmail.com', '+380 67 450 7496');
const user6 = new User(70, 'Vitalii', 'Zaharov', 'vitalii.zaharov@gmail.com', '+380 93 753 5197');
const user7 = new User(26, 'Viktoriia', 'Boldina', 'viktoriia.boldina@gmail.com', '+380 50 910 5791');
const user8 = new User(19, 'Aleksandr', 'Bronevoy', 'aleksandr.bronevoy@gmail.com', '+380 67 258 4879');
const user9 = new User(42, 'Tatiana', 'Zubova', 'tatiana.zubova@gmail.com', '+380 93 598 2563');
const user10 = new User(73, 'Elena', 'Golovach', 'elena.golovach@gmail.com', '+380 68 751 4125');
const user = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(user);
/* 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter) */
const filterObj = user.filter(user => user.id % 2 != 1);
console.log(filterObj);
/* 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)  */
const sortObj = user.sort((a, b) => a.id - b.id);
console.log(sortObj);
/* 4. Створити класс для об'єктів Client з полями id, name, surname , email, phone, order               */

/*       (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client  */

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//const element1 = new Client(34,'')
const element1 = new Client(98, 'Oleg', 'Ivaniuk', 'oleg.ivanov@gmail.com',
    '+380 50 641 6598',['Tommy Hilfiger', 'BOSS', 'LEVI_S', 'Guess', 'Karl Lagerfeld', 'Geox']);
const element2 = new Client(83, 'Irina', 'Petuhova', 'irina.petuhova@gmail.com',
    '+380 67 621 3254', ['Mersedes 600 S-class','Mazda CX-7']);
const element3 = new Client(54, 'Aleksei', 'Levchenko', 'aleksei.levchenko@gmail.com',
    '+380 93 563 2489', ['Samsung','LG']);
/*
const element4 = new Client(37, 'Sergei', 'Dyma', 'sergei.dyma@gmail.com', '+380 50 326 4189');
const element5 = new Client(69, 'Natalia', 'Silver', 'natalia.silver@gmail.com', '+380 67 450 7496');
const element6 = new Client(70, 'Vitalii', 'Zaharov', 'vitalii.zaharov@gmail.com', '+380 93 753 5197');
const element7 = new Client(26, 'Viktoriia', 'Boldina', 'viktoriia.boldina@gmail.com', '+380 50 910 5791');
const element8 = new Client(19, 'Aleksandr', 'Bronevoy', 'aleksandr.bronevoy@gmail.com', '+380 67 258 4879');
const element9 = new Client(42, 'Tatiana', 'Zubova', 'tatiana.zubova@gmail.com', '+380 93 598 2563');
const element10 = new Client(73, 'Elena', 'Golovach', 'elena.golovach@gmail.com', '+380 68 751 4125');
/******/



const massivClient = [element1, element2, element3];
console.log(massivClient);
//const massivClient=new Client()

/**/
class User22 {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
//    alert(this.name);
        console.log(this.name);
    }

}

// Использование:
let user23 = new User22("Иван");
user23.sayHi();

/*******/



/**/