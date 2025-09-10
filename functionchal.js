function fib(n) {
  let arr = [0, 1];
  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

const fibexp = function(n){
    let arr =[0,1];
    if( n<=2) return1;
    for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
   return arr[n];
};
const fibArrow=n=> {
    let arr =[0,1];
    if( n<=2) return1;
    for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
   return arr[n];

};
console.log(fib(10), fibexp(10), fibArrow(10)); // 55 55 55, all three functions return the 10th fibonacci number