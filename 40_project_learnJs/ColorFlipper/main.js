//  tạo một mảng js 
    let arrayColor = ['red','green' ,'blue','while','yellow'    ]; 

    let button_node = document.getElementById("btn");
    let color_value = document.getElementById('color_value');

    button_node.addEventListener("click",function(){
            let value = Math.floor(Math.random() *arrayColor.length);
            document.getElementById('controller1').style.backgroundColor =  arrayColor[value];
            color_value.style.color = arrayColor[value];
    });