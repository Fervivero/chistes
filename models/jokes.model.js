const mongoose = require("mongoose");


const JokesSchema = new mongoose.Schema({
    setup : {type: String},
    punchline: {type: String} 
}, { timestamps: true });


const JokesModel = mongoose.model("Jokes", JokesSchema);


module.exports = JokesModel;