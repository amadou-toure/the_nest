
var mongoose = require('mongoose'); var Schema = mongoose.Schema; var USER = new Schema({
    username: { type: String, required: true }, fisrst_name: { type: String }, birth_date: {
        day: { type: Number }, month: { type: Number }, year: { type: Number }
    }, password: { type: String }, email: { type: String, required: true }, phone: { type: String }, last_name: { type: String }, active: { type: Boolean, required: true }, role: {
        id: { type: Schema.Types.ObjectId }, lable: { type: String }
    }
});

const model = new mongoose.model('User', USER)
module.exports(model)