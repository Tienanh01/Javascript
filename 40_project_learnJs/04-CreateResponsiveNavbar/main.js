let btn_logo = document.querySelector(".nav-toggle");

let menu_selector = document.querySelector(".links");

console.log(menu_selector);

btn_logo.addEventListener("click", function() {
        if(menu_selector.classList.contains("show-links")){
            menu_selector.classList.remove("show-links");
        }
        else{
            menu_selector.classList.add("show-links");
        }
    // menu_selector.classList.toggle("show-links");
})