const mongoose=require('mongoose');

const question=mongoose.Schema({
	title: String,
		answers: {
			correct: String,
			incorrect: [String] },
		entered: {type: Date, default: Date.now}
});

module.exports=mongoose.model('Question',question);