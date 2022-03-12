const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");


const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const btn=document.querySelector(".btn");
const randomBtn=document.querySelectorAll(".randomBtn")

// lets start with the initial value
let currentItem=0;
// let the initial item

window.addEventListener('DOMContentLoaded',(e)=>{
   showThePerson()
})

// show a person based on the item

const showThePerson=()=>{
   const item=reviews[currentItem];
   img.src=item.img
   author.textContent=item.name
   job.textContent=item.job
   info.textContent=item.Text
}

nextBtn.addEventListener('click',(e)=>{
   e.preventDefault
   currentItem++
   if(currentItem>reviews.length-1){
      currentItem=0;
   }
   showThePerson() 
})
prevBtn.addEventListener('click',(e)=>{
   e.preventDefault
   currentItem--;
   if(currentItem<0){
      currentItem=reviews.length-1;
   }
   showThePerson()
})