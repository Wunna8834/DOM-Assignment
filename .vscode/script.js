let decreaseBtn = document.getElementById("decrease");
let increaseBtn = document.getElementById("increase");
let number = document.getElementById("number")
let count = 0;

decreaseBtn.addEventListener('click',()=>{
    count--;
    number.innerHTML = count;
})

increaseBtn.addEventListener('click', ()=>{
    count++;
    number.innerHTML = count;
})