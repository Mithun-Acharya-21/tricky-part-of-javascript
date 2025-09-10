var globalVar='I AM GLOBAL';//top variable is the global var

function concatString(str){
    window.concat=str+''+globalVar;//if we are using js in web browser the window object is the global object and we can set properties on it (by using . we can set properties)
}
function logString(){
    console.log(window.concat);
}
//first we'll call concat string..
concatString('I AM HUNGRY');//if we want to set a new global var but outside of global variabler

//then lets call logstring()
logString();