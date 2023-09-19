
var mongoose = require('mongoose');var Schema = mongoose.Schema;var announce = new Schema({homestead: {type: Schema.Types.ObjectId, required: true},USER: {type: Schema.Types.ObjectId, required: true}}); 
const model = new mongoose.model("Announce", announce)
module.exports=model