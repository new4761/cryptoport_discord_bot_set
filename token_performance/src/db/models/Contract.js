const mongoose = require("mongoose");

module.exports = mongoose.model("Contract", new mongoose.Schema({
    name: { type: String }, //ID of the user
    address:{type: String},
    chain: { type: String }, //ID of the guild
    registeredAt: { type: Number, default: Date.now() }
}));