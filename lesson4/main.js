// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a,b){
//     return (a+b)*2;
// }
// console.log(area(5,6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area2(r){
//     return (Math.PI*(r*r));
// }
// console.log(area2(3.15,5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area3(h,r,){
//     return ((2*(Math.PI*r))*(h+r));
// }
// console.log(area3(7,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function foo(arr){
//     for (const user of arr) {
//         console.log(user);
//     }
// }
// foo(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function arg(text) {
//     document.write(`<div><p>${text}</p></div>`)
// }
// arg('hello okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//     document.write(`<div>
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
// </div>`)
// }
// list(`smile`);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text,num) {
//     num = 5;
//     for (let i = 0; i < num; i++) {
//         document.write(`<div>
//     <ul>
//         <li>${text}</li>
//      </ul>
//  </div>`)
//     }
// }
// list(`smile`);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let elements = [true,23,'hello',1,4,false,'okten'];
// function foo(arr){
//     for (let arrElement of arr) {
//         document.write(`<div><ul><li>${arrElement}</li></ul></div>`)
//     }
// }
// foo(elements);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {age: 19, id: 12, name: `Sasha`},
//     {age: 18, id: 13, name: `Pasha`},
//     {age: 17, id: 14, name: `Masha`}
// ];
// function createLi(array){
//     for (let arrayElement of array) {
//         document.write('<div>')
//         for (const objElement in arrayElement) {
//
//             document.write(`<div>${objElement}: ${arrayElement[objElement]}</div>`)
//         }
//         document.write('</div><br>');
//     }
// }
// createLi([
//     {age: 19, id: 12, name: `Sasha`},
//     {age: 18, id: 13, name: `Pasha`},
//     {age: 17, id: 14, name: `Masha`}
// ]);



// - створити функцію яка повертає найменьше число з масиву

// let a = [0,2,3,1,5,6]
// function minNum(array){
//     console.log(Math.min(...a))
// }
// minNum([2,3,1,5,6])



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let num = [1,3,4]
// function sum(arr){
//     let zero = 0;
//     for (let i = 0; i < arr.length; i++) {
//         zero  += arr[i]
//     console.log(zero)
//     }
// }
// sum( [1,3,4,5] )


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2,index3,index4,index5,index6) {
//     let x = arr[index1]
//     arr[index1] = arr[index6]
//     arr[index6] = x;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44,55,66], 0, 1, 2,3,4,5));
























// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let tempValue = 0;
//     for (const sumUAHElement of currencyValues) {
//         if (exchangeCurrency === sumUAHElement.currency ){
//             tempValue = sumUAHElement.value
//         }
//     }
//     return sumUAH/tempValue;
//
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));




















