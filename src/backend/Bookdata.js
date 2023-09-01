const mongoose = require("mongoose");

let newData = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name : String,
    image : String,
})
module.exports = mongoose.model("Bookdata",newData)
