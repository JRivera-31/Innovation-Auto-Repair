// Dependencies
const express = require('express')
const next = require('next')
const url = require('url')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const session = require("express-session")

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// Mongoose setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/InnovationAutoRepair", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on("error", err => console.log(`Mongoose connection err:\n${err}`))

app.prepare().then(() => {
  const server = express()
 
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: true}))
  server.use("/api", require("./routes/appointment-routes"))
  server.use(session({secret: process.env.SESSIONSECRET, resave: false, saveUninitialized: true}))
  server.use("/user", require("./routes/auth-routes"))

  // server.get("/dashboard", (req, res) => {
  //   if (!req.user) {
  //     res.redirect("/login")
  //   }
  // })

  server.get('*', (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    return handle(req, res, parsedUrl)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> 🌎 Listening on ${PORT}`)
  })
})