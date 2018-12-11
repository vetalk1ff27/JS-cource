// console.log(NaN === NaN);

/*
//1
var z = {k:1, l: 2};
var x = {k:1, l: 2};

console.log(z === x);
*/

/*
//2
var zz = {};
var xx = {};

console.log(zz === xx);
*/

/*
//3
var z = {k:1, l: 2};
var x = z;

console.log(z === x);

x.k = 100500

console.log(z === x);
console.log(z.k);
*/

// console.log(typeof typeof undefined); //string

console.log(12 - '10'); //2
console.log(12 - '10a'); //NaN


console.log(1 - '12'); //-11
console.log(1 - +'12.04');//-11.04

console.log(typeof(+'12.04')); //number
console.log(typeof(+'12,04')); //number
console.log(+'12,04'); //NaN