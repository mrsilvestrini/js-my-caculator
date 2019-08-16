/*
Caculator in Javascript
Main Program
*/
console.log("My Calculator");

//Functions
function MyMult(x, y) {
  return x * y;
}

function MyDiv(x, y) {
  return x / y;
}

function MySum(x, y) {
  return x + y;
}

function MySub(x, y) {
  return x - y;
}

function MyMod(x, y) {
  return x % y;
}

//Get Functions for  Tests

//MyMult
var a = 10;
var b = 3;
console.log("Product Numbers:" + a + "*" + b + "=" + MyMult(a, b));

//MyDiv
var a = 0;
var b = 0;
console.log("Divsion Numbers:" + a + "/" + b + "=" + MyDiv(a, b));

//MySum
var a = 10;
var b = 20;
console.log("Sum Numbers:" + a + "+" + b + "=" + MySum(a, b));

//MySub
var a = 50;
var b = 18;
console.log("Sub Numbers:" + a + "-" + b + "=" + MySub(a, b));

//MyMod
var a = 3;
var b = 2;
console.log("Mod Numbers:" + a + "%" + b + "=" + MyMod(a, b));
