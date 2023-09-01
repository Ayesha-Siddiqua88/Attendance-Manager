


const burger=document.querySelector(".burger");
const nav=document.querySelector(".nav-links");

burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    nav.classList.toggle("active");
})
document.querySelector(".nav-links").forEach(n=>n.addEventListener("click",()=>{
    burger.classList.remove("active");
    nav.classList.remove("active");
}))
