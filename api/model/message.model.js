
var mongoose = require('mongoose'); var Schema = mongoose.Schema; var message = new Schema({ content: { type: String, required: true }, sender: { type: Schema.Types.ObjectId, required: true }, receiver: { type: Schema.Types.ObjectId, required: true }, announce: { type: Schema.Types.ObjectId, required: true } });
const model = new mongoose.model('Message', message)
module.exports(model)