addition = document.getElementById("add-ttl");
multiplication = document.getElementById("times-ttl");
subtraction = document.getElementById("minus-ttl");
console.log(addition, multiplication, subtraction)

function add(e){
    e.preventDefault()
    addition.innerText = +document.addition.addNum1.value + +document.addition.addNum2.value
}
function multiply(e){
    e.preventDefault()
    multiplication.innerText = +document.multiplication.timesNum1.value * +document.multiplication.timesNum2.value
}
function minus(e){
    e.preventDefault()
    subtraction.innerText = +document.subtraction.minusNum1.value - +document.subtraction.minusNum2.value
}

document.getElementsByClassName("add-btn")[0].addEventListener('click', add)
document.getElementsByClassName("times-btn")[0].addEventListener('click', multiply)
document.getElementsByClassName("minus-btn")[0].addEventListener("click", minus)
