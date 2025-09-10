fetch('https://jsonplaceholder.typicode.com/todos/1') //fecth is used make http request from the web browser
.then(response =>response.json())// parse the response as JSON
.then(json=>console.log(json))// log the JSON data