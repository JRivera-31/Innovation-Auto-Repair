// Dependencies
const express = require('express')
const next = require('next')
const mongoose = require("mongoose")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Mongoose setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/InnovationAutoRepair")
mongoose.connection.on("error", err => console.log(`Mongoose connection err:\n${err}`))

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})