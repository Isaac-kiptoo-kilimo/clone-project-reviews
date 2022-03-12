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
   showThePerson(currentItem)
})

// show a person based on the item

const showThePerson=(person)=>{
   const item=reviews[person];
   img.src=item.img
   author.textContent=item.name
   job.textContent=item.job
   info.textContent=item.Text
}

nextBtn.addEventListener('click',(e)=>{
   e.preventDefault
   currentItem++
   showThePerson(currentItem) 
})
prevBtn.addEventListener('click',(e)=>{
   e.preventDefault
   currentItem--;
   showThePerson(currentItem)
})