var mongoose = require('mongoose');
var schema = mongoose.Schema;
var empSchema = new schema({
    id: {type: String},
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    dob: {type: Date},
    address: {type: String},
    role: {type: String},
    tags: []
})

module.exports = mongoose.model('emp', empSchema);
