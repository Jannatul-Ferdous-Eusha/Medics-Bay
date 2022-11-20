const mongoose = require("mongoose");
const Specialist = new mongoose.Schema({
    department: String,
    description: String
})

module.exports = mongoose.model('specialist', Specialist)