let clk=document.querySelector(".navbar i");
let content=document.querySelector(".navlist");
let list=document.querySelectorAll(".navlist ul li");
clk.addEventListener("click",()=>{
    content.classList.toggle("add");
for(let i=0;i<=4;i++){
    list[i].addEventListener("click",()=>{
        content.classList.remove("add");
    })
}
});