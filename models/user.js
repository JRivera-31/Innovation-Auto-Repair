const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is required!"
    },
    password: {
        type: String,
        trim: true,
        required: "A password is required!",
        validate: [(input) => {
            input.length >= 8 
        }, "Password must be 8 characters or longer!"]
    }
})

class newUser {
    constructor({ id, username, password }) {
        this.id = id
        this.username = username
        this.password = password
    }

    comparePassword(challenge) {
        return this.password === challenge
    }
}

UserSchema.loadClass(newUser)
let User = mongoose.model("User", UserSchema)

module.exports = User

