var initialArray = [9,3,2,1,34,5,2];


const para = document.createElement("p");
para.innerText = "This is a paragraph";

document.body.appendChild(para);


for (const key of initialArray) {
    console.log(initialArray);
}

var stringArrayfirst =  initialArray.map((key,index)=>{
    return `<span>${key}<span>    `
})

    var initialArrayPrint = "<div>Mảng ban đầu </div>"+ stringArrayfirst.join("");
//  ý tưởng bubble sort 
var node = document.createElement("p")
node.innerHTML=initialArrayPrint ;
console.log(typeof node);

        document.body.appendChild(node);
// so sánh 2 giá trị gần kề , nếu 2 giá trị không xếp đúng vị trí thì đổi chỗ 

    function swap(a,b,array){
        var temp ;
          temp = array[a];
          array[a] =array[b];
          array[b] = temp;
    }

    for (let i = 0; i < initialArray.length -1; i++) {
        
        for (let j = i+1; j < initialArray.length; j++) {
                if(initialArray[i] > initialArray[j]){
                    swap(i,j,initialArray);
                }                           
        }
        
    }

    console.log(initialArray);
    var stringArray =  initialArray.map((key,index)=>{
        return `<div>${key}</div>`;
    })

    var listArr = stringArray.join("");

    document.getElementById("valueArray").innerHTML=listArr;

    console.log(typeof  document.getElementById("valueArray"))