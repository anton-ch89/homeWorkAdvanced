'use strict'; 



// Вариант 3

let weeks = {
'ru' : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
'en' : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

let lang = 'ru';

document.write(weeks[lang]);




// Задание 2

let namePerson;

let position = (namePerson === 'Артем') ? 'Директор' :
(namePerson === 'Максим') ? 'Преподаватель'
: 'Студент';

console.log(position);

