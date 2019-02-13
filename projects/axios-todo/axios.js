

let updatedObject = {
    title: "This is an updated todo",
    description: "Oh double wow!"
}
let dataArr = [];
axios.get("https://api.vschool.io/amy/todo").then(response => {
    response.data.map(item => dataArr.push(item))    
    displayTodos(dataArr)
}).catch(error => console.log(error))




function displayTodos(dataArr){
    for(let i = 0; i < dataArr.length; i++){
        // //create elements to display
        let listItem = document.createElement("div");
        let h1 = document.createElement("h1");
        let pTag = document.createElement("p");
        let pic = document.createElement("IMG");
        let deleteBtn = document.createElement("button")
        let updateBtn = document.createElement("button")
        let complete = document.createElement("input")
        complete.setAttribute("type", "checkbox");
        //put data into tags
        h1.innerText = `${dataArr[i].title}`
        pTag.innerText = `${dataArr[i].description}`
        pic.setAttribute("src",`${dataArr[i].imgUrl}`)
        deleteBtn.innerText = "delete";
        updateBtn.innerText = "update";
        //add event listeners to buttons
        deleteBtn.addEventListener("click", deleteTodo)
        updateBtn.addEventListener("click", updateTodo)
        listItem.id = `${dataArr[i]._id}`

        // append to the dom
        document.getElementById("mainList").prepend(listItem)
        listItem.appendChild(h1)
        listItem.appendChild(complete)
        listItem.appendChild(pTag)
        listItem.appendChild(pic)
        listItem.appendChild(updateBtn)
        listItem.appendChild(deleteBtn)
    }
}

const form = document.addTodoForm
form.addEventListener("submit", addTodo)

function addTodo(e){
    e.preventDefault();
    let newTitle = form.title.value;
    let newDescription = form.description.value;
    let newImgUrl = form.imgUrl.value;
    axios.post("https://api.vschool.io/amy/todo", {
        title: newTitle,
        description: newDescription,
        imgUrl: newImgUrl})
    .then((response)=>{
        // dataArr.push(response.data)
        displayTodos([response.data])
        form.title.value = ""
        form.description.value = ""
        form.imgUrl.value = ""
    })
    .catch(function(error){
        console.log(error)
    })
    
}
function updateTodo(id, updatedObject){
    console.log("hey now!")
    // axios.put(`https://api.vschool.io/amy/todo/${id}`, updatedObject).then(function(response){
    //     console.log(response.data)
    // }).catch(function(error){
    //     console.log(error)
    // })
}
function deleteTodo(e){
    axios.delete(`https://api.vschool.io/amy/todo/${e.target.parentElement.id}`).then(function(response){
        console.log(response.data)
        e.target.parentElement.remove()
    }).catch(function(error){
        console.log(error)
    })

}




// axios.post("https://api.vschool.io/amy/todo", newObject).then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })

// axios.put(`https://api.vschool.io/amy/todo/${id}`, updatedObject).then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })

// axios.delete(`https://api.vschool.io/amy/todo/${id}`).then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })




