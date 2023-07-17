var array1 = [10,5,5,9,4,2];

let initialArray = array1.map(function arr(value){
return `<span>${value}</span>  `;
})
let stringarray = initialArray.join("");
var node  = document.createElement("p");
node.innerHTML="<div>Mảng ban đầu </div>"+stringarray;
document.body.appendChild(node);
var j;
for (let i = 1; i < array1.length; i++) {
    var temp = array1[i];
     j = i -1;

    while(j >= 0 && array1[j] > temp){
        array1[j+1]  = array1[j];
        j = j - 1;
    }
    array1[j+1] = temp;
}

let destination_array = array1.map((e) =>{
    return `<span>${e}</span>   `;
})

let destinationString = destination_array.join("");

let destination_node = document.createElement("p");
destination_node.innerHTML ="<br><br><div>Mảng lúc sau</div>"+destinationString
;
document.body.appendChild(destination_node)

console.log(array1);