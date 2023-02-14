// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 let rectangleS = (a,b) => a * b;
console.log(rectangleS(5, 6));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (pi,r) => 2 * pi * r;
console.log(circle(3.15, 4));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderS = (h,r) => 2*3.15* r * (h+r);
console.log(cylinderS(5, 4));


// - створити функцію яка приймає масив та виводить кожен його елемент
let a = [1,2,true,'hi'];
let arr  = a  => document.write(a);
arr(a);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let parag = (text) => document.write(`<p><h1>${text}</h1></p>`);
parag('hi!');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (text) => document.write(`<div>
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
// </div>`)
// list(`smile`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list = (text,num) =>  {
    num = 5;
    document.write('<ul>')
    for (let i = 0; i < num; i++) {
        document.write(`<div>
        <li>${text}</li>
 </div>`)
    }
    document.write('</ul>')
}
list(`smile`);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = [true,23,'hello',1,4,false,'okten'];
let foo = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div><ul><li>${arrElement}</li></ul></div>`)
    }
}
foo(elements);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let createLi = (array) => {
    for (let arrayElement of array) {
        document.write('<div>')
        for (const objElement in arrayElement) {

            document.write(`<div>${objElement}: ${arrayElement[objElement]}</div>`)
        }
        document.write('</div><br>');
    }
}
createLi([
    {age: 19, id: 12, name: `Sasha`},
    {age: 18, id: 13, name: `Pasha`},
    {age: 17, id: 14, name: `Masha`}
]);


// - створити функцію яка повертає найменьше число з масиву
let minNum = (numbers) => {
    let min = numbers[0];
    for (let number of numbers) {
        if (min > number){
            min = number;
        }
    }
    return min;
}
console.log(minNum([2, 3, 1, 5,-3, 6]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        zero  += arr[i]
    console.log(zero)
    }
}
sum( [1,3,4,5] );


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let x = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = x;
    return arr;
}
console.log(swap([11, 22, 33,44 ], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const item of currencyValues) {
        if (exchangeCurrency === item.currency ){
            return sumUAH / item.value;
        }
    }
}
console.log(exchange(
    10000,
    [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
    'USD'));
