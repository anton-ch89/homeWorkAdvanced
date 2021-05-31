'use strict'; 

//    Урок 2

let num = 266219;
let result = 1;

num = num.toString().split('');


for (let i = 0; i < num.length; i++) {
    result *= num[i];
}

// for (let i of num) {
//     result *=i;
// }

result **= 3;

result = result.toString().substr(0, 2);
console.log('result: ', result);

//   Урок 3
// Задание 1

let lang;
let daysRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let daysEn = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday';

//  Вариант 1
// lang = 'ru';
// if (lang === 'ru') {
//     console.log(daysRu);
// }
// else if (lang === 'en') {
//     console.log(daysEn);
// }else {
//     console.log('Значение переменной задано неверно');
// }



//  Вариант 2

// lang = 'en';
// switch (lang) {
//     case 'ru': 
//         console.log(daysRu);
//         break;
//     case 'en': 
//         console.log(daysEn);    
//         break;
//     default : 
//         console.log('Значение переменной задано неверно');
// }

// Вариант 3

let weeks = [
['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
];

let week = (lang === 'ru') ? weeks[0] : weeks[1];
console.log(week);

week = (lang === 'en') ? weeks[1] : weeks[0];
console.log(week);




// Задание 2

let namePerson;

let position = (namePerson === 'Артем') ? 'Директор' :
(namePerson === 'Максим') ? 'Преподаватель'
: 'Студент';

console.log(position);

