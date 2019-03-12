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
    res.send(database.find(item => item.id === id))
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
    res.send(database.find(item => item.id === id))
})

app.delete("/todos/:id", (req, res) => {
    const {id} = req.params;
    const index = database.indexOf(item => item.id === id)
    database.splice(index, 1)
    res.sendStatus(200)
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))