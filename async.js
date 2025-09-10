(async () => {
    const serverResult = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonResult = await serverResult.json();
    console.log(jsonResult);
})()