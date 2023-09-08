//  callback hell  --  việc thực hiện trước là kết quả của việc thực hiện sau 

// const { resolveNaptr } = require("dns")

//  promise  
//  reslove  , reject ,  .then .catch .finally 



// Fetch trong js  

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json();
})
.then((posts) =>{
    console.log(posts.id);
})
.catch(function(){
    console.log(
        "Có lỗi xảy ra "
    );
})