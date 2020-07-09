const express = require("express")
const router = express.Router()
const db = require("../../models/")

router.get("/times", (req, res) => {
    db.Appointments.find({}, (times) => {
        res.json(times)
    })
    .catch(err => console.log(err))
})

module.exports = router