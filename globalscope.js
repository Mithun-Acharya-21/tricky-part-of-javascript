var globalVar='I AM GLOBAL';

function concatString(str){
    var globalVar='new string'//we can also override this
    return str+' '+globalVar;
}
console.log(concatString('I AM HUNGRY'));//every module in this have access of globalvar
