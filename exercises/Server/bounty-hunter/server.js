const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 3090

app.use(express.json())

app.use("/bounty", require("./routes/bounty-routes"))

mongoose.connect("mongodb://localhost:27017/bounty-hunter", {useNewUrlParser: true}).then(() => console.log("Connected to MongoDB!"))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))