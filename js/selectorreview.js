const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");


const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const btn=document.querySelector(".btn");
const randomBtn=document.querySelectorAll(".randomBtn")

// lets start with the initial value
let currentItem=3;
// let the initial item

window.addEventListener('DOMContentLoaded',(e)=>{
   const item=reviews[currentItem];
   img.src=item.img
})