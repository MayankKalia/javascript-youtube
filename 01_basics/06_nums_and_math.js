//automatically defines it as Number type
const score = 400
console.log(score);

//specially casts that it's a number
const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

//it is an object in itself which has many properties
//it's vlue always comes between 0 and 1, mostly decimal hi aati hai
console.log(Math.random());

//It shifts one value or digit to the LEFT
console.log(Math.random()*10);

//Value can also be 0 or 0.041, so to avoid that case, we add 1
console.log((Math.random()*10) + 1);

//we wrap it around floor in order to get the smallest value, basically rounds it off to the lowest value
console.log((Math.floor(Math.random()*10) + 1));

const min = 10
const max = 20

 //this will generate no between 10 & 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)