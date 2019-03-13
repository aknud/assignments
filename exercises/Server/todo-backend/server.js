const express = require("express")
const database = require("./database")
const uuid = require("uuid")
const app = express()

app.use(express.json())

const PORT = 3089;

app.get("/todos", (req, res) => {
    res.send(database)
})
app.get("/todos/:id", (req, res) => {
    const {id} = req.params;
    let found = database.find(todo => todo.id === id)
    found ? res.send(found) : res.send("Todo not found")
})
app.post("/todos", (req, res) => {
    let newObj = req.body
    newObj.id = uuid.v4()
    newObj.completed = false
    database.push(newObj)
    res.send(newObj)
})

app.put("/todos/:id", (req, res) => {
    const {id} = req.params;
    const updatedObj = req.body;
    database.forEach(item => {
        if(item.id === id){
            item = Object.assign(item, updatedObj)
        }
    })
    let found = database.find(item => item.id === id)
    found ? res.send(found) : res.send("That todo doesn't exist")
})

app.delete("/todos/:id", (req, res) => {
    const {id} = req.params;
    const index = database.findIndex(item => item.id === id)
    if(index !== -1){
        database.splice(index, 1)
        res.sendStatus(200)
    } else {
        res.send("That todo don't exist, YO")
    }
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))