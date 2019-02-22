const button = document.createElement('button');
const value = document.createElement("h1")
button.innerText = "Click Me!";

button.style.cssText = "height: 200px; width: 300px; background-color: blue; font-size: 40px;"

// localStorage.removeItem("numberOfClicks")
let click = localStorage.getItem("numberOfClicks");
function count(e){
    click++
    localStorage.setItem("numberOfClicks", click )
    value.innerText = localStorage.getItem("numberOfClicks")
    setTimeout(()=> {
        button.removeEventListener("click", count)
        localStorage.removeItem("numberOfClicks")
    }, 10000)
}


button.addEventListener("click", count);

document.body.appendChild(button)
document.body.appendChild(value)