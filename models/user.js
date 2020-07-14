const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
    SALT_WORK_FACTOR = 10

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is required!",
        unique: true
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

UserSchema.pre("save", function(next) {
    const user = this

    // only hash the password if it has been modified or is new
    if (!user.isModified("password")) return next
    
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err)
        
        // hash the password with new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)

            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err)
        cb(undefined, isMatch)
    })
}

class newUser {
    constructor({ id, username, password }) {
        this.id = id
        this.username = username
        this.password = password
    }
}

UserSchema.loadClass(newUser)
let User = mongoose.model("User", UserSchema)

module.exports = User

