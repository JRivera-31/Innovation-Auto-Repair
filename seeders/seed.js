const mongoose = require("mongoose")
let db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/InnovationAutoRepair", {
  useNewUrlParser: true
})

let appointmentSeeds = [
    {
        name: "Test Tester",
        email: "test@test.com",
        phonenumer: "555 555 5555",
        description: "dfasfasfasdf",
        date: "7/11/20",
        time: "5:00"
    }
]


db.Appointments.deleteMany({})
    .then(() => db.Appointments.collection.insertMany(appointmentSeeds))
    .then(data => {
        console.log(data.result.n + "seeds entered")
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })    