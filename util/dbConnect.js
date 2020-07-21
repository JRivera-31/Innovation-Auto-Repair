import mongoose from "mongoose"

// Create connection object
const connection = {}

async function dbConnect() {
    // Check if we have connection to db
    if (connection.isConnected)
        return
    
    // connect to db
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected)
}

export default dbConnect
