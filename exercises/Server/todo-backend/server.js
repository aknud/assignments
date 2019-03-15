const express = require("express")
const database = require("./database")
const uuid = require("uuid")
const app = express()
const mongoose = require("mongoose")
const db = require("./db")

app.use(express.json())

const PORT = 3089;



app.get("/todos", (req, res) => {
    db.find((err, todo) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(todo)
    })
    // res.send(database)
})
app.get("/todos/:_id", (req, res) => {
    const {_id} = req.params;
    let found = database.find(todo => todo._id === _id)
    found ? res.send(found) : res.send("Todo not found")
})
app.post("/todos", (req, res) => {
    const newObj = new db(req.body)
    newObj.completed = false
    newObj.save(err => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(newObj)
    })
})

app.put("/todos/:_id", (req, res) => {
    const {_id} = req.params;
    const updatedObj = req.body;
    database.forEach(item => {
        if(item._id === _id){
            item = Object.assign(item, updatedObj)
        }
    })
    let found = database.find(item => item._id === _id)
    found ? res.send(found) : res.send("That todo doesn't exist")
})

app.delete("/todos/:_id", (req, res) => {
    const {_id} = req.params;
    const index = database.findIndex(item => item._id === _id)
    if(index !== -1){
        database.splice(index, 1)
        res.sendStatus(200)
    } else {
        res.send("That todo don't exist, YO")
    }
})

//the first argument is the url to our database followed by a slash and the name you want your db to have.
mongoose.connect("mongodb://localhost:27017/todos", {useNewUrlParser: true}).then(()=> {
    console.log("Connected to MongoDB")
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))