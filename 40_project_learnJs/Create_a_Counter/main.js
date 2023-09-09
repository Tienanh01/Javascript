const value = document.querySelector("#value");
let count = 0;
console.log(value)

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    console.log(btns);
    console.log( "3 btn ",btn);
   btn.addEventListener("click",function(e){
    console.log(btn);
const styles = e.currentTarget.classList;
    if(styles.contains("increase")){
        count++;
    }
    else if(styles.contains("decrease")){
        count--;
    }
    else{
        count = 0;
    }


    value.textContent = count;

   })

})

//  trong javascritp khi bạn gắn một sự kiện  event bằng addEventListener bạn thường truyền một hàm call back vào đó  , hàm callback này có thể 
//  chứa một tham số gọi là event haowcj e , để đại diện cho dới tượng sự kiện event object của sự kiện đó . tham số event chứa thông tin về sự kiện 
//  và cho phép  bạn truy xuất thông tin như loại sự kiện , phím được nhận  nếu sự kiện được nhấn , toạn độ , ...