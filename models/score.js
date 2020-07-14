const mongoose=require('mongoose');

const scoreschema=mongoose.Schema({
	username: String,
		score: Number,
		date: {type: Date, default: Date.now},
		country: String
});

module.exports=mongoose.model('Score',scoreschema);