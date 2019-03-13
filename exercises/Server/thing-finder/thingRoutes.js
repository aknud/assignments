const express = require("express")
const thingRouter = express.Router()
const database = require("./database")

thingRouter.route("/")
    .get((req, res) => {
        let {type, price, min, max} = req.query;
        if(type && min && max){
            res.send(database.filter(thing => thing.type === type && thing.price >= +min && thing.price <= +max))
        } else if (type){
            res.send(database.filter(thing => thing.type === type))
        } else if (price){
            res.send(database.filter(thing => thing.price <= +price))
        } else {
            res.send(database)
        }
    })

module.exports = thingRouter