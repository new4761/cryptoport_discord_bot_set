const mongoose = require("mongoose");

module.exports = mongoose.model("Member", new mongoose.Schema({
    symbol: { type: String },
    name: { type: String }, //ID of the user
    chain: { type: String }, //ID of the guild
    registeredAt: { type: Number, default: Date.now() }
}));