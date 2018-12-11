/*//1
var a =12;
console.log(a); // 12
*/

/*//2
var k;

if(false){
    k =321;
}
console.log(k); // undefined

if(true){
    k =123;
}
console.log(k); // 123
*/

/*//3
var z = 12;
console.log(z); // 12

function fn() {
    var z = 42;
    console.log(z); // 42
}

fn();
console.log(z); // 12
*/

/*//4
var z = 12;
console.log(z); // 12

function fn() {
    console.log(z); // 12
    z = 42;
    console.log(z); // 42
}

fn();
console.log(z); // 42
*/

/*
//5
var z = 12;
console.log(z); // 12

function fn() {
    console.log(z); // undefined
    var z = 42;
    console.log(z); // 42
}

fn();
console.log(z); // 12
*/

/*//6
var z = 12;
console.log(z); // 12

function fn() {
    var z;
    console.log(z); // 42
    var z = 42;
    console.log(z); // 42
}

fn();
console.log(z); // 12
*/
