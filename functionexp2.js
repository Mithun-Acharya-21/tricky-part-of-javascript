// This function accepts a function and logs the time it takes for the function to execute.
function timeFn(fn) {
  const beginTime = performance.now();
  fn();
  const endTime = performance.now();
  console.log('Time took: ', endTime - beginTime);
}

/*This function just runs a for-loop 100,000 times.
function looper() {
  for(let i = 0; i < 100000; i++) { }
}

// Call timeFn with looper()
timeFn(looper);*/
timeFn(function(){
    for(let i = 0; i < 100000; i++) { }
});//