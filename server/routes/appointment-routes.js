const express = require("express")
const router = express.Router()
const db = require("../../models")

router.get("/appointments", (req, res) => {
    db.Appointments.find({}).then((appointments) => {
        res.json(appointments)
    })
    .catch(err => console.log(err))
})

router.post("/appointments", (req, res) => {
    let { name, email, phonenumber, description, date, time } = req.body 

    db.Appointments.create({ name, email, phonenumber, description, date, time })
        .then(newAppointment => res.json(newAppointment))
        .catch(err => console.log(err))
})

router.delete('/appointments/:id', (req, res) => {
    db.Appointments.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => console.log(err));
})

router.get('/blockouts', (req, res) => {
    db.Blockout.find({})
        .then(blockouts => {
            res.json(blockouts);
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/blockouts', (req, res) => {
    let { date } = req.body;
    db.Blockout.create({ date })
        .then(newBlockout => res.json(newBlockout))
        .catch(err => console.log(err));
})

router.delete('/blockouts/:id', (req, res) => {
    db.Blockout.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err));
})

module.exports = router