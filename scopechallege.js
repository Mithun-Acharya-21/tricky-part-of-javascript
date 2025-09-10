const vegetable = 'carrot';
let value;

if(hoisted) {
  var fruit = 'apple';
}

if(!hoisted) {
  var fruit = 'banana';
}

function setString(str) {
  window.str = str;
}
function addTenToNum(num) {
  var ten = 10;
  value = ten + num;//it is accesed within the function scope,since global scope has no access to this variable
}

setString('Hello World');
addTenToNum(5);

var str = window.str;

console.log('1: ', hoisted);//undefined, as hoisted is declared after the console.log
console.log('2: ', fruit);//bannana,as var is not block scoped 
console.log('3: ', value);// first we are setting a value to value in the function addTenToNum, then we are logging it, so it will be 15
console.log('4: ' , vegetable);//carrot, as vegetable is declared outside the block and is not affected by the hoisting
console.log('5: ', str);//Hello World, as we are setting the value of str in the function setString and then logging it
console.log('6: ', ten);//ReferenceError: ten is not defined, as ten is declared inside the function addTenToNum and is not accessible outside the function

var hoisted = true;