/*//1
let z = 12;
console.log(z); // 12
*/

/*//2
console.log(z); // ReferenceError
let z = 12;
*/

/*
//3
if(true){
    let k =321;
    console.log(k); //321
}
console.log(k); // ReferenceError
*/

/*
//4
let z = 12;

if(true){
    let z = 456;
}
console.log(z); // 12
*/

/*
//5
let z = 12;

function fn() {
    z = 100500;
}

if(true){
    let z = 456;
    console.log(z); //456
}

fn();
console.log(z); // 100500
*/


