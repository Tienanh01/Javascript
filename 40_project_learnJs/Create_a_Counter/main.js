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

    if(count > 0 ){
        value.style.color = "green";
    }
    else if(count < 0 ){
        value.style.color = "red";
    }
    else {
        value.style.color = "black";
    }

    value.textContent = count;

   })

})

//  trong javascritp khi bạn gắn một sự kiện  event bằng addEventListener bạn thường truyền một hàm call back vào đó  , hàm callback này có thể 
//  chứa một tham số gọi là event haowcj e , để đại diện cho dới tượng sự kiện event object của sự kiện đó . tham số event chứa thông tin về sự kiện 
//  và cho phép  bạn truy xuất thông tin như loại sự kiện , phím được nhận  nếu sự kiện được nhấn , toạn độ , ...

//  khi load trang , js chỉ đăng ký ( khai báo ) một hàm call back cho cho hàm addEventListener với phần tử được đăng ký  , nếu không có sự kiện 
//  sảy ra thì không thực hiện hàm callback 
//  khi load trang , chạy hàm foreach , và khai báo button reset  có hàm callback  b , button decrease có hàm call back a  , 
//  khi có sự kiện với button reset , hàm callback b sẽ được thực hiện mà không phải hàm call back a được thực hiện 



/* 
Các khái niệm được đề cập   -- Key concepts covered 
     document.querySelectorAll(.btn)     -- lấy ra toàn bộ các phần tử html có class có selector .btn 
     forEach
     addEventListenner   - -gắn sự kiện cho phần tử html 
     curentTarget   --    thuộc tính của EVENT OBJECT trong hàm callback   -- lấy ra dom của phần tử đó
     classList    --  cho phép bạn truy cập và thao tác vơi các danh sách các lớp  của phần tử đó
            cung cấp một số phương thức và thuộc tính để thêm , sửa , xóa và kiểm tra  tìm kiếm các lớp trong phần tử  -- thao tác với class 



*/