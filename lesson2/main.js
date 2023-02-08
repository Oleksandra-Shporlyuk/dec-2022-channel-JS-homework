//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [10, -10, true, false, 'string', 1000, 0, '20', 50, -18];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let youAreSpecial = {
    title: 'You Are Special',
    pageCount: 32,
    genre: 'Fiction'
};
console.log(youAreSpecial);

let boundaries = {
    title: 'Boundaries',
    pageCount: 320,
    genre: 'Fiction'
};
console.log(boundaries);

let counterfeitGods = {
    title: 'Counterfeit Gods',
    pageCount: 300,
    genre: 'Foction'
};
console.log(counterfeitGods);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'You Are Special',
    pageCount: 32,
    genre: 'Fiction',
    autor1: [
        { name: 'SAsha'},
        {age : 78 }
    ]
};

console.log(book1);


let book2 = {
    title: 'Boundaries',
    pageCount: 320,
    genre: 'Fiction',
    autor2: [
        { name: 'Henry Cloud'} ,
        { age: 66}
    ]
};
console.log(book2);

let book3 = {
    title: 'Counterfeit Gods',
    pageCount: 300,
    genre: 'Foction',
    autor3: [
        {name: 'Timothy Keller'} ,
        {age: 72}
    ]
};
console.log(book3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Oleg',username:'Tarasov',password:'12345'},
    {name: 'Ivan',username:'Ivanuch',password:'67890'},
    {name: 'Taras',username:'Demiv',password:'4578'},
    {name: 'Sasha',username:'Koten',password:'23487'},
    {name: 'Igor',username:'Spivak',password:'456947'},
    {name: 'Leonid',username:'Zalz',password:'398498'},
    {name: 'Bogdan',username:'Panin',password:'4597347'},
    {name: 'Rostik',username:'Romachen',password:'e39483984'},
    {name: 'Anatoliy',username:'Rovim',password:'48747'},
    {name: 'Pasha',username:'Kolen',password:'4874879'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.



// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
if (x !== 0){
    console.log('Yes!');
} else {
    console.log('No!');
}

let a = 1;
// a = 0;
// a = -3;
if (a !== 0){
    console.log('Yes!');
} else {
    console.log('No!')
}

//
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// let time = prompt('Enter number');
// if (time >= 0 && time <= 14) {
//     console.log('Перша чверть')
// }
// if(time >=15 && time <= 30) {
//     console.log('Друга чверть')
// }
// if(time >=31 && time <= 45) {
//     console.log('Третя чверть')
// }
// if(time >=46 && time <= 59) {
//     console.log('Четверта чверть')
// }
//
//
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day =prompt('enter number');
// if (day >=1 && day <= 10) {
//     console.log('Перша декада')
// }if (day >=11 && day <= 20) {
//     console.log('Друга декада')
// }if (day >=21 && day <= 31) {
//     console.log('Третя декада')
// }




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = prompt('Enter number');
 switch (schedule) {
     case '1' :
         document.write('Monday - you go to school') ;
         break;
     case '2' :
         document.write('Tuesday-  - you go to school');
         break;
     case '3' :
         document.write('Wednesday - you go to school');
         break;
     case '4' :
         document.write('Thursday - you go to school');
         break;
     case '5' :
         document.write('Friday - you go to school');
         break;
     case '6' :
         document.write('Saturday - you go to walk with friend:)');
         break;
     case '7' :
         document.write('Sunday - you go to Church');
         break;
     default :
         console.log('??????');

 }


// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 18;
let num2 = 6;
if (num1 > num2) {
    console.log(`Більше число ${num1}`);
} else if (num1===num2){
    console.log(`Числа рівні ${num1} = ${num2}`);
} else {
    console.log(`Більше число ${num2}`);
}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let p = null;
p = 'default' || p;
console.log(p);

// p = undefined;
// p = p || 'default';
// console.log(p);
//
// p = 0;
// p = p || 'default';
// console.log(p);
//
// p = '';
// p = p || 'default';
// console.log(p);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let number1 = coursesAndDurationArray [0].monthDuration;
if(number1 >= 5 ) {
    console.log('Super');
} else {
    console.log('No');
}let number2 = coursesAndDurationArray [1].monthDuration;
if(number2 >= 5 ) {
    console.log('Super');
} else {
    console.log('No');
}let number3 = coursesAndDurationArray [2].monthDuration;
if(number3 >= 5 ) {
    console.log('Super');
} else {
    console.log('No');
}let number4 = coursesAndDurationArray [3].monthDuration;
if(number4 >= 5 ) {
    console.log('Super');
} else {
    console.log('No');
}let number5 = coursesAndDurationArray [4].monthDuration;
if(number5 >= 5 ) {
    console.log('Super');
} else {
    console.log('No');
}let number6 = coursesAndDurationArray [5].monthDuration;
if(number6 >= 5 ) {
    console.log('Super');
} else {
    console.log('No');
}









