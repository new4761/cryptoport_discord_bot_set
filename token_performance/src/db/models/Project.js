const mongoose = require("mongoose");

module.exports = mongoose.model("Project", new mongoose.Schema({
    symbol: { type: String },
    name: { type: String },  // project name
    chain: {type :String},
    type: { type: String }, // defi | gamefi | launchpad?
    addBy: {type:String},
    registeredAt: { type: Number, default: Date.now() },
    lastUpdate:{type:String}
}));