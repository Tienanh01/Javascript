const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  console.log(reviews.length -1 );

 // VALUE 
  let img_person = document.getElementById("img-person");
  let job_selector = document.getElementById("job");
  let name_selector = document.getElementById("author");
  let text_selector = document.getElementById("info");


//   controling

let prev_selector = document.querySelector('.prev-btn');
let next_selector = document.querySelector(".next-btn");
let superise_selector = document.querySelector(".superise-btn");

console.log(prev_selector)
let curent_index = 0;

prev_selector.addEventListener("click",function(){
    curent_index--;
    if(curent_index < 0){
        curent_index = reviews.length - 1;
    }
    console.log(reviews);
    currentObject = reviews[curent_index];

    console.log(currentObject.id);
    changeInfo(currentObject);
  
})

next_selector.addEventListener("click",function(){
    curent_index++;
    currentObject = reviews[curent_index];
    if(curent_index >= reviews.length - 1){
        curent_index = 0;
    }
    console.log(currentObject.id);

    changeInfo(currentObject);
})

let changeInfo = (arr) => {
   
    img_person.src = currentObject.img;
    job_selector.textContent= currentObject.job;
    name_selector.textContent = currentObject.name;
    text_selector.textContent = currentObject.text;
    
}

let randomFn = () =>{
    return Math.random * reviews.length -1  ;
}


superise_selector.onclick = (arr)=>{
    randomFn()
    curent_index++;
    if(curent_index > reviews.length - 1){
        curent_index = 0;
    }
    currentObject = reviews[curent_index];

    changeInfo(reviews);
    
}
