
//////// Qualifier ///////

//get the label tag so we can append the newly created header above it.
let themeLabel = document.getElementsByTagName("label");
//create header element
let mainHeader = document.createElement("header");
//append header above label tag
document.body.insertBefore(mainHeader, themeLabel[0]);
//give header a class of myheader
mainHeader.setAttribute("class", "myHeader")
//insert h1 tag into header
mainHeader.innerHTML = `<h1>JavaScript Made This!!</h1>`;
mainHeader.innerHTML += `<p><span>Amy</span> wrote the JavaScript</p>`;
let amySpan = document.getElementsByTagName("span");
amySpan[0].setAttribute("class", "name");

///////// Bronze /////////

//get all the messages in array
let messages = document.querySelectorAll("div.message")
//loop over messages array and change the text.
messages.forEach(message => {
    if(message.innerText === "I have something serious to talk about"){
        message.innerText = "Hi how are you?"
    } else if (message.innerText === "I don't want to talk"){
        message.innerText = "Great, and you?"
    } else if (message.innerText === "You have to, you're the police"){
        message.innerText = "I'm awesome. What're you doing?"
    } else if (message.innerText === "I'm just a simple farmer"){
        message.innerText = "Trying to learn how to manipulate the DOM."
    }
});

function clearMessages(){
    messages.forEach(message => {
        message.remove()
    })
}


//////////// Silver //////////////

let leftConvos = document.querySelectorAll("div.message.left")
let rightConvos = document.querySelectorAll("div.message.right")
function themeChanger(e){
    if(e.target.value === "theme-two"){
        leftConvos.forEach(msg => {
            msg.style.backgroundColor = "red";
            msg.style.color = "white";
        })
        rightConvos.forEach(msg => {
            msg.style.backgroundColor = "black";
            msg.style.color = "white";
        })
    } else {
        leftConvos.forEach(msg => {
            msg.style.backgroundColor = "burlywood";
            msg.style.color = "black";
        })
        rightConvos.forEach(msg => {
            msg.style.backgroundColor = "lightblue";
            msg.style.color = "black";
        })
    }
}


document.getElementById("theme-drop-down").addEventListener("change", themeChanger)
document.getElementById("clear-button").addEventListener('click', clearMessages)


///////// Gold //////////////


function addMessageFunc(e){
    e.preventDefault()
    let newMsg = document.addMessage.getElementsByTagName("input")[0].value;
    // console.log(newMsg)
    let newMsgDiv = document.createElement("div").classList = "message left";
    newMsgDiv.innerText = newMsg;
    console.log(newMsgDiv)
    let messagesContainer = document.getElementsByClassName("messages")[0];
    messagesContainer.appendChild(newMsgDiv)
}

document.addMessage.addEventListener("submit", addMessageFunc)