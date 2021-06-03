'use strict';

const arr = ['6546557', '213543', '435676', '876345646', '315614', '4645646', '2646684'];

arr.forEach( e => {
   if (e[0] === '2' || e[0] === '4'){
      console.log(e);
   }
} );



next:
for (let i = 2; i <= 100; i++) {
    for (let n = 2; n < i; n++) {
        if (i % n === 0) continue next;
        
    }
    console.log(i + 'Делители этого числа: 1 и ' + i);
}