const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
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
    selectedTimes: {
        type: Date,
        required: "Date is required!"
    },
    availableTimes: [{ date: String, times:{ time: String, isAvailable: { type: Boolean} }}]
})

class newAppointment {
    constructor({ id, name, email, date, availableTimes}) {
        this.id = id
        this.name = name
        this.email = email
        this.date = date
        this.availableTimes = availableTimes
    }
}

AppointmentSchema.loadClass(newAppointment)
let Appointment = mongoose.model("Appointment", AppointmentSchema)

module.exports = Appointment