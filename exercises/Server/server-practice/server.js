//The only thing a server does is listen and give responses.

const express = require("express");
const app = express();
const uuid = require("uuid")
const database = require("./database")
const PORT = 3088;

app.use(express.json())

//GET request
app.get("/food", (req, res) => {
    res.send(database)
})

app.get("/food/:id", (req, res) => {
    const { id } = req.params; 
    let found = database.find(item => item.id === id)
    found ? res.send(found) : res.send("Not found")
})


//POST requests
app.post("/food", (req, res) => {
    const newObj = req.body;
    newObj.id = uuid.v4();
    database.push(newObj)
    res.send(newObj)
})


//PUT requests
app.put("/food/:id", (req, res) => {
    let updatedObj = req.body;
    let {id} = req.params;
    database.forEach(item => {
        if(item.id === id){
            item = Object.assign(item, updatedObj)
        }
    })
    res.send(database.find(item => item.id === id))
})


//DELETE requests
app.delete("/food/:id", (req, res) => {
    const {id} = req.params;
    const index = database.findIndex(item => item.id === id)
    database.splice(index, 1)
    res.send('Item deleted')
})


//The first argument is the port you want to listen on.
//The second argument is a callback function. It lets you know that your application is still running.
//React uses 3000, so don't use that one. 
app.listen(PORT, () => console.log(`The server is running on ${PORT}`))