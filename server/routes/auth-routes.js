const express = require("express")
const router = express.Router()
const db = require("../../models")

router.post("/register", (req, res) => {
    const { username, password } = req.body

    db.User.create({username, password})
        .then(newUser => res.status(200).json(newUser))
        .catch(err => res.status(401).json(err))
})

router.post("/login", (req, res) => {
    const { username, password } = req.body
    
    db.User.findOne({ username: username })
        .then(user => {
            user.comparePassword(password, function (err, isMatch) {
                if (isMatch && isMatch == true) {
                    req.session.user = user
                    return res.status(200).json(user)
                } else {
                    return res.status(404).json(err)
                }
            })
        })
        .catch(err => res.status(404).json(err))
})

router.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        return res.status(401).send()
    }

    return res.status(200).send("Welcome!")
})

router.get("/logout", (req, res) => {
    req.session.destroy()
    return res.status(200).send()
})

module.exports = router