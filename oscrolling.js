let nums = document.querySelectorAll(".nums .num");
let sec = document.querySelector(".three");
let num = document.querySelectorAll(".num");
let start = false


window.onscroll= function(){
    if(window.scrollY >= sec.offsetTop-100){
        if (!start){
            num.forEach((el) =>startCount(el))
        }
        start= true
        
    }
}
console.log(num[0].getAttribute('data-goal'))
function startCount(num) {
    
    let goal = num.getAttribute('data-goal') ;
    let count = setInterval(() => {
        num.textContent++;
        if (num.textContent==goal){

            clearInterval(count);
        }
    },2000 / goal)
}
