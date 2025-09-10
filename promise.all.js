Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=> response.json()),
    fetch('hhtps://jsonplaceholder.typicode.com/todos/2')
    .then(response=> response.json()),
    new Promise((resolve,reject)=>{
        document.getElementById('btn')
        .addEventListner('click',()=>resolve('clicked'));
    })
]).then(results=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});

