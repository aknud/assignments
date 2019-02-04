square = document.getElementById("dj")

function enter(){
    square.style.background = "blue"
}
function leave(){
    square.style.background = "white"
}
function down(){
    square.style.background = "red"
}
function up(){
    square.style.background = "yellow"
}
function double(){
    square.style.background = "green"
}
function scrolling(){
    square.style.background = "orange"
}
function typed(e){
    if(e.keyCode === 66){ enter() } 
    else if( e.keyCode === 82){ down() }
    else if(e.keyCode === 89){ up() }
    else if(e.keyCode === 71){ double() }
    else if(e.keyCode === 79){ orange() }
    else { leave() }

}

square.addEventListener("mouseenter", enter)
square.addEventListener("mouseleave", leave)
square.addEventListener("mousedown", down)
square.addEventListener("mouseup", up)
square.addEventListener("dblclick", double)
document.addEventListener("scroll", scrolling)
document.addEventListener("keydown", typed)