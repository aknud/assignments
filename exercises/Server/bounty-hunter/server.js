const express = require("express")
const uuid = require("uuid")
const database = require("./database")
const app = express()
const PORT = 3090

app.use(express.json())

app.get("/bounty",(req, res) => {
    res.send(database)
})
app.get("/bounty/:id",(req, res) => {
    const {id} = req.params
    let bounty = database.find(bounty => bounty.id === id)
    bounty ? res.send(bounty) : res.send("Bounty doesn't exist.")
})
app.post("/bounty",(req, res) => {
    let newBounty = req.body
    newBounty.id = uuid.v4()
    newBounty.living = true
    database.push(newBounty)
    res.send(newBounty)
})
app.put("/bounty/:id",(req, res) => {
    const {id} = req.params;
    let updatedBounty = req.body;
    database.forEach(bounty => {
        if(bounty.id === id){
            bounty = Object.assign(bounty, updatedBounty)
        }
    })
    res.send(updatedBounty)
})
app.delete("/bounty/:id",(req, res) => {
    const {id} = req.params;
    const index = database.indexOf(bounty => bounty.id === id)
    database.splice(index, 1)
    res.sendStatus(200)
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))