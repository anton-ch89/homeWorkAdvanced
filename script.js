'use strict';


let date = new Date();
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let year = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

let today = date.getDay()-1;
let monthNow = date.getMonth();
let day = '';
let month = '';
let hour = '';

week.forEach((e, i) => {
if(today === i) {
  day = e;
}
});

year.forEach((e, i) => {
  if(monthNow === i) {
    month = e;
  }
  });
console.log(month);


const getHour = function() {
  if (date.getHours() === 1){
    hour = ' час ';
  }else if(4 >= date.getHours() >=2){
    hour =' часа ';
  }else {hour =' часов ';}
};
getHour();

let newDiv = document.createElement('div');
function clock(){ 
  let date = new Date();
  let fulldate = `<p>Сегодня ${day}, ${date.getDate()} ${month} ${date.getFullYear()} года ${date.getHours()} ${hour}  ${date.getMinutes()}  минут ${date.getSeconds()} секунды</p>`;
  document.querySelector('.clock').innerHTML = fulldate;
}

setInterval(clock, 1000);


let task2Second = '';
let task2Minute = '';
let task2Hour = '';
let task2Day = '';
let task2Month = '';

const plusZero = function() {
  if(date.getDate() < 10){
    task2Day = '0' + date.getDate();
  }else {task2Day =  date.getDate();} 
  if(date.getMonth() < 10)  {
    task2Month = '0' + date.getMonth();
  } else {task2Month =  date.getMonth();} 
  if(date.getHours() < 10)  {
    task2Hour = '0' + date.getHours();
  }else {task2Hour =  date.getHours();} 
  if(date.getMinutes() < 10)  {
    task2Minute = '0' + date.getMinutes();
  }else {task2Minute =  date.getMinutes();} 
  if (date.getSeconds() < 10)  {
    task2Second = '0' + date.getSeconds();
  }else {task2Second = date.getSeconds();} 
};
plusZero();

function clock2 () {
  let date = new Date();
  document.querySelector('.clock2').innerHTML = `<br><p> ${date.toLocaleDateString('ru')} - ${date.toLocaleTimeString('ru')}</p>`;
}
setInterval(clock2, 1000);
