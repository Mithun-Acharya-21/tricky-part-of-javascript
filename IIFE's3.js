function fibfactory(num){
    return (function fib(n){
        if(n<2){
            return n;
        }
        return fib(n-1)+fib(n-2);
    })(num);
}
const tenthfib = fibfactory(10);
const fifthfib = fibfactory(5);
console.log(tenthfib,fifthfib); // 55 5, the function fib is executed immediately with the argument passed to it, and returns the fibonacci number for that argument