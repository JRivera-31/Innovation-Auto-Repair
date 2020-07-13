const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockoutSchema = new Schema({
    date: {
        type: String,
        trim: true,
        required: true
    }
})

class newBlockout {
    constructor({ date }) {
        this.date = date;
    }
}

BlockoutSchema.loadClass(newBlockout);
let Blockout = mongoose.model('Blockout', BlockoutSchema);

module.exports = Blockout;