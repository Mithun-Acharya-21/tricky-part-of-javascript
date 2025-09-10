const helloPromise = new Promise((resolve, reject) => {
  resolve('Hello');
});
const worldPromise = new Promise((resolve, reject) => {
  resolve('World');
});

/*method1
helloPromise.then(result =>{
    worldPromise.then(result2 =>{
        console.log(result + ' ' + result2);
    })
})*/
/*method2
promise.all([helloPromise, worldPromise])
.then(result =>{
    console.log(result[0] + ' ' + result[1]);});*/
/*method3
(asych ()=>console.log(await hellopromise+''+await worldpromise))();*/