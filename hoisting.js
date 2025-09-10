/*let char = 'a';
if(true) {
  console.log(char);
  let char = 'b';
}*/ // console.log(char); // ReferenceError: char is not defined
console.log(squareNumber(4));
function squareNumber(num) {
  return num **2;
} // console.log(squareNumber(4)); // 16 //for function declarations, hoisting works

