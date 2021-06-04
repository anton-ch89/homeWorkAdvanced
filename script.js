'use strict';
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let today = new Date().getDay()-1;



week.forEach ((e, i) => {
  if (today === i) {
      if (e === 'Суббота' || e === 'Воскресенье') {
        document.write(`<p><strong><em>${e}</em></strong></p>`);
      } else {document.write(`<p><strong>${e}</strong></p>`);}
  } else if (e === 'Суббота' || e === 'Воскресенье') {
    document.write(`<p><em>${e}</em></p>`);
  } else {
    document.write(`<p>${e}</p>`);
  }
}
);

