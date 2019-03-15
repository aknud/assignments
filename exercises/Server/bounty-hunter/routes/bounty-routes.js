const express = require("express")
const bountyRouter = express.Router()
const BountyMakers = require("./../model/bounty");


bountyRouter.route("/")
    .get((req, res) => {
        BountyMakers.find((err, bounties) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        let newBountyData = req.body
        let newBountyObj = new BountyMakers(newBountyData)
        newBountyObj.save()
        .then((savedBounty) => res.status(201).send(savedBounty))
        .catch(err => {
            res.status(500)
            next(err)
        })
    })

bountyRouter.route("/:_id")
    .get((req, res) => {
        const {_id} = req.params
        let bounty = database.find(bounty => bounty._id === _id)
        bounty ? res.send(bounty) : res.send("Bounty doesn't exist.")
    })
    .put((req, res) => {
        const {_id} = req.params;
        let updatedBounty = req.body;
        database.forEach(bounty => {
            if(bounty._id === _id){
                bounty = Object.assign(bounty, updatedBounty)
            }
        })
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        const {_id} = req.params;
        BountyMakers.findByIdAndRemove(_id, (err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send({message: "Bounty successfully deleted.", _id: _id})
        })

        // const index = database.indexOf(bounty => bounty._id === _id)
        // database.splice(index, 1)
        // res.sendStatus(200)
    })

module.exports = bountyRouter