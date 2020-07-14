// Dependencies
const express = require('express')
const next = require('next')
const mongoose = require("mongoose")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require("body-parser")
const session = require("express-session")

// Mongoose setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds243501.mlab.com:43501/heroku_rb0kcmzp" || 
  "localhost:27017/InnovationAutoRepair", {
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

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> 🌎 Ready on http://localhost:${port}`)
  })
})