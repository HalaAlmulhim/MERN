const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup : {type : String},
    punchline : {type : String}
}, {timestamps : true})

module.exports.Jokes = mongoose.modle('Joke', JokeSchema);