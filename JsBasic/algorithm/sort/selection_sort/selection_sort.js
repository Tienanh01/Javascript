var arr = [62,24,15,22,1];


// ý tưởng thuật toán  
// duyệt qua 1 vòng qua mảng , tìm phần tử nhỏ nhất .
// đổi chỗ phần tử nhỏ nhất với vị trí đầu tiên của mảng ,
// mảng sẽ bị thu nhỏ lại , bắt đầu từ vị trí sau vị trí bé nhất vừa đc xắp xếp đến hết

let swap = (a,b,arr) => {
        var temp= arr[a];
        arr[a] = b;
        b = temp;
}
console.log("Mảng trước sắp xếp");
console.log(arr);


let findMin = (arr,index) =>{
    let min = arr[index];
    let position = index;
    console.log("giá trị trong ham ");
    console.log(index);
    console.log(min);
    console.log(arr.length-index+1);
    console.log("giá trị trong ham ");
    for (let i = index; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
            position = i;
        }
    }
    return position;
}

// console.log(arr);
// console.log(`gias trị min ${findMin(arr,1)}`)
// console.log(arr);
// console.log(`gias trị min ${findMin(arr,2)}`)

// duyệt qua các vị trí cần xắp xếp
    for (let i = 0; i < arr.length; i++) {
        var min = arr[i] ;
            var position  = findMin(arr,i);
          console.log("Gía trị min thứ i "+min)    
            if(arr[position] < arr[i])          {
              var temp = arr[i];
              arr[i] = arr[position]
              arr[position] = temp;
            }
            console.log("mảng tại vị trí i ");
            console.log(arr);
    }
    console.log("Mảng sau xắp xếp ;");

    console.log(arr);