const mongoose = require("mongoose")
let db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/InnovationAutoRepair", {
  useNewUrlParser: true
})

let availableTimeSeed = [{
    availableTimes: [
        {
            day: 0,
            times: "No available times"
        },
        {
            day: 1,
            times: [
                {time: "9:00", isAvailable: true},
                {time: "9:30", isAvailable: true},
                {time: "10:00", isAvailable: true},
                {time: "10:30", isAvailable: true},
                {time: "11:00", isAvailable: true},
                {time: "11:30", isAvailable: true},
                {time: "1:00", isAvailable: true},
                {time: "1:30", isAvailable: true},
                {time: "2:00", isAvailable: true},
                {time: "2:30", isAvailable: true},
                {time: "3:00", isAvailable: true},
                {time: "3:30", isAvailable: true},
                {time: "4:00", isAvailable: true},
                {time: "4:30", isAvailable: true}]
        },
        {
            day: 2,
            times: [
                {time: "9:00", isAvailable: true},
                {time: "9:30", isAvailable: true},
                {time: "10:00", isAvailable: true},
                {time: "10:30", isAvailable: true},
                {time: "11:00", isAvailable: true},
                {time: "11:30", isAvailable: true},
                {time: "1:00", isAvailable: true},
                {time: "1:30", isAvailable: true},
                {time: "2:00", isAvailable: true},
                {time: "2:30", isAvailable: true},
                {time: "3:00", isAvailable: true},
                {time: "3:30", isAvailable: true},
                {time: "4:00", isAvailable: true},
                {time: "4:30", isAvailable: true}]
        },
        {
            day: 3,
            times: [
                {time: "9:00", isAvailable: true},
                {time: "9:30", isAvailable: true},
                {time: "10:00", isAvailable: true},
                {time: "10:30", isAvailable: true},
                {time: "11:00", isAvailable: true},
                {time: "11:30", isAvailable: true},
                {time: "1:00", isAvailable: true},
                {time: "1:30", isAvailable: true},
                {time: "2:00", isAvailable: true},
                {time: "2:30", isAvailable: true},
                {time: "3:00", isAvailable: true},
                {time: "3:30", isAvailable: true},
                {time: "4:00", isAvailable: true},
                {time: "4:30", isAvailable: true}]
        },
        {
            day: 4,
            times: [
                {time: "9:00", isAvailable: true},
                {time: "9:30", isAvailable: true},
                {time: "10:00", isAvailable: true},
                {time: "10:30", isAvailable: true},
                {time: "11:00", isAvailable: true},
                {time: "11:30", isAvailable: true},
                {time: "1:00", isAvailable: true},
                {time: "1:30", isAvailable: true},
                {time: "2:00", isAvailable: true},
                {time: "2:30", isAvailable: true},
                {time: "3:00", isAvailable: true},
                {time: "3:30", isAvailable: true},
                {time: "4:00", isAvailable: true},
                {time: "4:30", isAvailable: true}]
        },
        {
            day: 5,
            times: [
                {time: "9:00", isAvailable: true},
                {time: "9:30", isAvailable: true},
                {time: "10:00", isAvailable: true},
                {time: "10:30", isAvailable: true},
                {time: "11:00", isAvailable: true},
                {time: "11:30", isAvailable: true},
                {time: "1:00", isAvailable: true},
                {time: "1:30", isAvailable: true},
                {time: "2:00", isAvailable: true},
                {time: "2:30", isAvailable: true},
                {time: "3:00", isAvailable: true},
                {time: "3:30", isAvailable: true},
                {time: "4:00", isAvailable: true},
                {time: "4:30", isAvailable: true}]
        },
        {
            day: 6,
            times: "No available times"
        }
    ]
}]

db.Appointments.deleteMany({})
    .then(() => db.Appointments.collection.insertMany(availableTimeSeed))
    .then(data => {
        console.log(data.result.n)
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })    