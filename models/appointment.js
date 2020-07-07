const mongoose = require("mongoose")
const Scheme = mongoose.Schema

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required!"
    },
    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: "Email address is required!"
    },
    date: {
        type: Date,
        required: "Date is required!"
    },
    time: {
        type: Array,
        required: "A time is required!"
    }
})

class newAppointment {
    constructor({ id, name, email, date, time }) {
        this.id = id
        this.name = name
        this.email = email
        this.date = date
        this.time = time
    }
}

AppointmentSchema.loadClass(newAppointment)
let Appointment = mongoose.model("User", UserSchema)

module.exports = Appointment