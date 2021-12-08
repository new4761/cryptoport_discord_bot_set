const mongoose = require("mongoose");

module.exports= mongoose.model("ListProject", new mongoose.Schema({
    symbol: { type: String },
    name: { type: String }, //ID of the user
    type: { type: String }, //ID of the guild
    addBy: {type:String},
    registeredAt: { type: Number, default: Date.now() },
    lastUpdate:{type:String}
}));