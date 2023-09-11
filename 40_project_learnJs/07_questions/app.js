// let btns = document.querySelectorAll("button");


// btns.forEach((btn) => {
    
//     btn.addEventListener("click",function(e){
//         const question  = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle("show-text");
//     })

// });

let question =  document.querySelectorAll(".question");

question.forEach((item) =>{
    let btn_selector = document.querySelector(".question-btn");

       btn_selector.addEventListener("click",function(){
        if(item !== question){
            item.classList.remove("show-text");
        }

        item.classList.toggle("show-text");
       })


    console.log(question);
})
