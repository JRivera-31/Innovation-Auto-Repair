const express = require("express")
const router = express.Router()
const db = require("../../models")

router.post("/register", (req, res) => {
    const { username, password } = req.body

    db.User.create({username, password})
        .then(newUser => res.status(200).json(newUser))
        .catch(err => res.status(401).json(err))
})

router.get("/")

module.exports = router