// This is a schema file
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    first: String,
    last: String,
    living: {
        type: Boolean,
        default: true
    },
    imgUrl: {
        type: String,
        default: "https://www.thewrap.com/wp-content/uploads/2014/05/shialabeouf.jpg"
    },
    bounty: Number,
    affiliation: String
})

module.exports = mongoose.model("BountyMakers", bountySchema)