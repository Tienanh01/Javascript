// foreach
// every  trả về kiểu boolean   // toán tử and 
// some  trả về boolean    như toán tử or
// map trả về 1 mảng mới theo return trả về 

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

cources.forEach(function(cource,index){
    console.log(index,cource);
})

var isFree = cources.every(function(cource,index){
    return cource.coin ===0;
})

console.log(isFree);

console.log(cources.find(function(cource, index){
    return cource.id ===5;
}))


// map trả về phần tử mới 

function courceHandler(cource,index){
    return {
        id:cource.id
    }
}
var newCourses = cources.map(courceHandler);

console.log(newCourses);

// tính tổng số coin

var totalCoin = cources.reduce(function(total, cource){
    return total+cource.coin;
},0)
// , initial value 
console.log(`Total coin ${totalCoin}`);

var numbers   = [100,32,4343,23,3232];

// accumulator là giá trị tích lũy , giá trị được trả về sau mỗi lần gọi hàm call back 
// giá trị của từng phần tử trong mảng 
// index của từng phần tử trong mảng 
// array ban đầu 


var totalNumbers = numbers.reduce(function(accumulator, currentValue, currentIndex,array){
    return accumulator +currentValue ;
})

console.log(`total of number ${totalNumbers}`)

var deptArray = [1,2,[3,4],5,6,[7,8,9]];

var totaldept = deptArray.reduce(function(accumulator,currentValue, currentIndex,array){
   return accumulator.concat(currentValue)
},[]);

console.log(`total ${totaldept}  typeof  ${typeof totaldept}`);

var totaldeptp2 = totaldept.reduce((a,b)=>{
    return a +b;
},0);

console.log(totaldeptp2);



