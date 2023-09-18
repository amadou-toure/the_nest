
var mongoose = require('mongoose');var Schema = mongoose.Schema;var evaluation = new Schema({USER: {type: Schema.Types.ObjectId, required: true},content: {type: String, required: true},stars: {type: Number, required: true},announce: {type: Schema.Types.ObjectId, required: true}});
const model = new mongoose.model("Evaluation", evaluation)
module.exports(model) 