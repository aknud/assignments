const express = require("express")
const bountyRoute = express.Router()
const BountyMakers = require("./../model/bounty");


bountyRoute.route("/")
    .get((req, res) => {
        BountyMakers.find((err, bounties) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        let newBountyObj = new BountyMakers(req.body)
        newBountyObj.save()
        .then((savedBounty) => res.status(201).send(savedBounty))
        .catch(err => {
            res.status(500)
            next(err)
        })
    })

bountyRoute.route("/:_id")
    .get((req, res) => {
        const {_id} = req.params
        BountyMakers.findById(_id,(err, bounty) => {
            if(err) return res.status(500).send(err)
            res.status(200).send(bounty)
        })
    })
    .put((req, res) => {
        const {_id} = req.params;
        BountyMakers.findByIdAndUpdate({_id}, req.body, (err, bounty) => {
            err && res.status(500).send(err)
            return res.status(200).send(bounty)
        })
    })
    .delete((req, res) => {
        const {_id} = req.params;
        BountyMakers.findOneAndDelete({_id}, (err, bounty) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send({message: "Bounty successfully deleted.", _id: _id})
        })
    })

module.exports = bountyRoute