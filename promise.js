const waitMs = (ms)=>new Promise((resolve,reject) =>{
    setTimeout(() => resolve(`waited ${ms} milliseconds`),ms);
});
waitMs(100)
.then((message)=>console.log(message))
.catch(()=>console.log('error'));