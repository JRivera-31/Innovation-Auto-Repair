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
    phonenumber: {
        type: String,
        trim: true,
        required: "Please include your phone number!"
    },
    description: {
        type: String,
        trim: true,
        maxlength: 300
    },
    date: {
        type: String,
        required: "Must include a date!"
    },
    time: {
        type: String, 
        required: "Must include a time"
    }
})

class newAppointment {
    constructor({ id, name, email, phonenumber, description, date, time}) {
        this.id = id
        this.name = name
        this.email = email
        this.phonenumber = phonenumber
        this.description = description
        this.date = date
        this.time = time
    }
}

AppointmentSchema.loadClass(newAppointment)
let Appointment = mongoose.model("Appointment", AppointmentSchema)

module.exports = Appointment