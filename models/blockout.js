const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlockoutSchema = new Schema({
    date: {
        type: String,
        trim: true,
        required: true
    }
})

class Blockout {
    constructor({ date }) {
        this.date = date;
    }
}

BlockoutSchema.loadClass(Blockout);

module.exports = mongoose.models.Blockout || mongoose.model("Blockout", BlockoutSchema)