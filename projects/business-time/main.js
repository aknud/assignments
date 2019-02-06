

var dropDown = document.getElementsByClassName("dropDown")[0];
let sendBtn = document.contact.sendBtn;
console.log(sendBtn)

function hamburgerX(x) {
    x.classList.toggle("change");
    dropDown.classList.toggle("show");
}

function msgHandler(e){
  e.preventDefault();
  console.log(e)
  swal({
    text: `Thank you for your feedback, ${e.target.name.value}. We'll be in touch soon.`
  })
}

contact.addEventListener("submit", msgHandler)