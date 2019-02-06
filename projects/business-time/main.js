var dropDown = document.getElementsByClassName("dropDown")[0];
let msg = document.contact.message;
console.log(msg)

function hamburgerX(x) {
    x.classList.toggle("change");
    dropDown.classList.toggle("show");
}

function msgHandler(e){
  e.preventDefault();
  console.log(e.target.value)
}

msg.addEventListener("input", msgHandler)