const express = require("express")
const router = express.Router()
const db = require("../../models")

router.get("/appointments", (req, res) => {
    db.Appointments.find({}).then((appointments) => {
        res.status(200).json(appointments)
    })
    .catch(err => res.status(404).json(err))
})

router.get("/lastappointment", (req, res) => {
    db.Appointments.find({}).sort({$natural: -1}).limit(1).then(appointment => {
        res.status(200).json(appointment)
    })
    .catch(err => res.status(404).json(err))
})

router.post("/appointments", (req, res) => {
    let { name, email, phonenumber, description, date, time } = req.body 

    db.Appointments.create({ name, email, phonenumber, description, date, time })
        .then(newAppointment => res.status(200).json(newAppointment))
        .catch(err => res.status(404).json(err))
})

router.delete('/appointments/:id', (req, res) => {
    db.Appointments.deleteOne({ _id: req.params.id })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(404).json(err));
})

router.get('/blockouts', (req, res) => {
    db.Blockout.find({})
        .then(blockouts => {
            res.status(200).json(blockouts);
        })
        .catch(err => {
            res.status(404).json(err);
        })
})

router.post('/blockouts', (req, res) => {
    let { date } = req.body;
    db.Blockout.create({ date })
        .then(newBlockout => res.status(200).json(newBlockout))
        .catch(err => res.status(404).json(err));
})

router.delete('/blockouts/:id', (req, res) => {
    console.log(req.params.id);
    db.Blockout.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(404).json(err));
})

module.exports = router