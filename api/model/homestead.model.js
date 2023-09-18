
var mongoose = require('mongoose');var Schema = mongoose.Schema;var homestead = new Schema({type: {type: String},location: {
},price: {type: String},negociable: {type: Boolean},images:{type:[]} ,USER: {type: Schema.Types.ObjectId, required: true}}); 
const model = new mongoose.model("Homestead", homestead)
module.exports(model)