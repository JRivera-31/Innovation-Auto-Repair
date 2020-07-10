// Dependencies
const express = require('express')
const next = require('next')
const mongoose = require("mongoose")

const port = parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require("body-parser")

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
  server.use("/api", require("./routes/index"))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> 🌎 Ready on http://localhost:${port}`)
  })
})