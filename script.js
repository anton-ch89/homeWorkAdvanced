'use strict';

// const color = `#${(Math.random().toString(16)+'000000').substring(2,8)}`;

// let p = document.createElement('p');
// p.innerText = `${color}`;
// document.body.append(p);
// let button = document.createElement('button');
// button.innerText = 'Поменять цвет';
// document.body.append(button);

let p = document.createElement('p');
document.body.append(p);

let button = document.createElement('button');
button.innerText = 'Поменять цвет';
document.body.append(button);



const changeColor = () => {
  const color = `#${(Math.random().toString(16)+'000000').substring(2,8)}`;
  p.innerText = `${color}`;
document.body.style.backgroundColor = color;
};


button.addEventListener('click', changeColor);
