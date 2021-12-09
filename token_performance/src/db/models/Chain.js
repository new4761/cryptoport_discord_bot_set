const mongoose = require("mongoose");

module.exports = mongoose.model("Chain", new mongoose.Schema({
    symbol: { type: String },
    name: { type: String },
    registeredAt: { type: Number, default: Date.now() },
    lastUpdate:{type:String}
}));