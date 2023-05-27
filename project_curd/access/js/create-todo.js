const form  = document.getElementById("form"); 
/**
 * Đoạn mã này tham chiếu đến phần tử HTML có id là form và gắn vào biến form . Điều này giúp bạn truy cập và thao tác với ác phần tử bên trong 
 * biểu mẫu html
 * 
    Biến form có thể sử dụng để thao tác thêm các xử lý sự kiện , truy xuất các trường dữ liệu trong biểu mẫu , hoặc thực hiện các thao tác 
    liên quan đến biểu mẫu
 */

const input  = document.getElementById("input")
// const button = document.getElementById("button");
const todo   = document.getElementById("todo");


let todoList = [] ; 

console.log("Mảng ban đầu ");



form.addEventListener("submit" , function(e){    // form.addEvenListenner gửi giá trị khi người dùng nhấn vào nút button
 

    e.preventDefault();   // chặn form chuyển sang trang khác 

    console.log("Mảng lúc sau : ");
    addTodo();
    console.log(todoList);


})

function addTodo(){
    // get input 

    const newTodo  = input.value ;
    // return if nothing was entered
    if(!newTodo) return;

    // add new task to do list

    todoList.push({
        text:newTodo,
        completed : false
    });

    // add the todo list to lacalstorage
    localStorage.setItem("todos" ,JSON.stringify(todoList));
    render(todoList);

}

function render(){
    //clear the list 

    todo.innerHTML = null ;

     // get todo list from localstorage 
     const todos = localStorage.getItem("todos");

     todoList = JSON.parse(todos) || [] ;

     for(let i  = 0;i< todoList.length ; i++){
        const item = document.createElement("li");

        // create checkbox to update completed state  
        const checkbox = document.createElement("input");

        const button = document.createElement("button");
        button.innerText = "X";

        checkbox.type = "checkbox";
        checkbox.addEventListener("click" , function(e){
            todoList[i].completed = e.target.checked ;

            localStorage.setItem("todos",JSON.stringify(todoList));
            if (todoList[i].completed) {
                item.classList.add("completed");
                item.classList.remove("uncompleted");
               checkbox.checked = todoList[i].completed;
            } else {
              item.classList.add("uncompleted");
              item.classList.remove("completed");
              checkbox.checked = todoList[i].completed;
            }

        });

        const text  = document.createElement("p");

        text.innerText = todoList[i].text ; 
        
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todo.appendChild(item);
        input.value = null;


       
   
        button.addEventListener("click", function () {
          todoList.splice(i, 1);
          localStorage.setItem("todos", JSON.stringify(todoList));
          render();
        });

     }

   

}

// create text node 


