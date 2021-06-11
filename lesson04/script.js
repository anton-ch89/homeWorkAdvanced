'use strict'; 


const foo = function (value) {
    if (typeof (value) === 'string') {
        if (value.length > 30) {
            return (value.trim().slice(0, 30) + '...');
        }
        return value.trim();
    } else if (typeof (value) !== 'string') {
        console.log('Это не строка');
    }
    else {
        console.log('Что-то пошло не так');
    }
    return value;
};

console.log(foo(' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, alias.  '));
