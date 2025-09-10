const callAPI=(url)=>{
    return new promise((resolve,reject)=>{
        $.ajax({
            url,
            type:'GET',
            success: function(data){
                resolve(data);
            },
            error: function(error){
                reject(error);
            },
        })

    })
};
callAPI('https://google.com')
.then(result =>{
    console.log(result);
})
.catch(error=>{
    console.error('Error:', error);
});