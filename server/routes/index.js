const express = require("express")
const router = express.Router()
const db = require("../../models/")

router.get("/appointments", (req, res) => {
    db.Appointments.find({}).then((appointments) => {
        res.json(appointments)
    })
    .catch(err => console.log(err))
})

router.post("/appointments", (req, res) => {
    console.log(req.body)
})

// router.get('/times/:date', (req, res) => {
//     db.Appointments.find({date: req.params.date}, (times) => {
//         if(times === null) {
//             //All times available (9-5)
//         } else {
//             let availableTimes = times.map(time => {
//                 if(available) {
//                     return time;
//                 }
//             })
//             return availableTimes;
//         }
//     })
// })

module.exports = router