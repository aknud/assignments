//This is a Schema
//This a template of how your database will look.
// This is the criteria your data needs to follow

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean,
    imgUrl: String
})

module.exports = mongoose.model("Todos", todoSchema)


//Buffer is a media object