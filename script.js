
let num = 266219;
let result = 1;

num = num.toString().split('');


// for (let i = 0; i < num.length; i++) {
//     result *= num[i];
// }

for (let i of num) {
    result *=i;
}

result = result ** 3;

result = result.toString().substr(0, 2);
console.log('result: ', result);


