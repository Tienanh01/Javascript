var cources = [
    {
        id:1,
        name:"PHP",
        coin:400
    },
    {
        id:2,
        name:"JAVA",
        coin:400
    }
    ,
    {
        id:3,
        name:"Javascript",
        coin:400
    }
    ,{
        id:4,
        name:"C",
        coin:400
    },
    {
        id:5,
        name:"PYTHON",
        coin:400
    },
    {
        id:6,
        name:"RUBY",
        coin:400
    }
]

// function callbackofMap(currentvalue , index,array){

    // value loc qua ,
    // index : giá trị ban đầu 
    // mảng ban đầu 
// }

var coursesTemplate = cources.map(function(currentValue,index){
        return `
            <tr>
            <td> <h2>${currentValue.id}<h2></td>
            <td><h2>${currentValue.name}</h2></td>
            <td><h2>${currentValue.coin}</h2></td>            
            </tr>        
        `;
})

var htmls = coursesTemplate.join('');
console.log(htmls);
console.log( typeof htmls);
document.getElementById("element").innerHTML=htmls.toString();