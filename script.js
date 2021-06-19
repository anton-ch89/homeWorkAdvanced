'use strict';


let date = new Date();
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let year = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

let today = date.getDay() - 1;
let monthNow = date.getMonth();
let day = '';
let month = '';
let hour = '';

let clockDiv1 = document.createElement('div');
clockDiv1.className = 'clock';
document.body.append(clockDiv1);
let clockDiv2 = document.createElement('div');
clockDiv2.className = 'clock2';
document.body.append(clockDiv2);

week.forEach((e, i) => {
  if (today === i) {
    day = e;
  }
});

function declOfNum(n, textForms) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  } else if (n1 > 1 && n1 < 5) {
    return textForms[1];
  } else if (n1 === 1) {
    return textForms[0];
  } else {
    return textForms[2];
  }
}

year.forEach((e, i) => {
  if (monthNow === i) {
    month = e;
  }
});
console.log(month);


const getHour = function () {
  if (date.getHours() === 1) {
    hour = ' час ';
  } else if (4 >= date.getHours() >= 2) {
    hour = ' часа ';
  } else {
    hour = ' часов ';
  }
};
getHour();

let newDiv = document.createElement('div');

function clock() {
  let date = new Date();
  let fulldate = `<p>Сегодня ${day}, ${date.getDate()} ${month} ${date.getFullYear()} 
  года ${date.getHours()} ${hour}  ${date.getMinutes()}  
  ${declOfNum(date.getMinutes(), ['минута', 'минуты', 'минут'])} ${date.getSeconds()} 
  ${declOfNum(date.getSeconds(), ['секунда', 'секунды', 'секунд'])}</p>`;
  document.querySelector('.clock').innerHTML = fulldate;
}

setInterval(clock, 1000);


let task2Second = '';
let task2Minute = '';
let task2Hour = '';
let task2Day = '';
let task2Month = '';

const plusZero = function () {
  if (date.getDate() < 10) {
    task2Day = '0' + date.getDate();
  } else {
    task2Day = date.getDate();
  }
  if (date.getMonth() < 10) {
    task2Month = '0' + date.getMonth();
  } else {
    task2Month = date.getMonth();
  }
  if (date.getHours() < 10) {
    task2Hour = '0' + date.getHours();
  } else {
    task2Hour = date.getHours();
  }
  if (date.getMinutes() < 10) {
    task2Minute = '0' + date.getMinutes();
  } else {
    task2Minute = date.getMinutes();
  }
  if (date.getSeconds() < 10) {
    task2Second = '0' + date.getSeconds();
  } else {
    task2Second = date.getSeconds();
  }
};
plusZero();

function clock2() {
  let date = new Date();
  document.querySelector('.clock2').innerHTML = `<p> ${date.toLocaleDateString('ru')} - ${date.toLocaleTimeString('ru')}</p>`;
}
setInterval(clock2, 1000);
