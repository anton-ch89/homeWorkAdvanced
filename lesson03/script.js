'use strict'; 


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

lang = 'en';
const weeks = [
['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
];
const keys = {
    ru : 0, 
    en : 1
};

console.log(weeks[keys[lang]]);


// Задание 2

let namePerson;

let position = (namePerson === 'Артем') ? 'Директор' :
(namePerson === 'Максим') ? 'Преподаватель'
: 'Студент';

console.log(position);

