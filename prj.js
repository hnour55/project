var heart=Array.from(document.getElementsByClassName('fa-heart'))
for(let el of heart){
    el.addEventListener("click",function(){
        el.classList.toggle("red")
    })
}