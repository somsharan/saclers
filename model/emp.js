var mongoose = require('mongoose');
var schema = mongoose.Schema;
var empSchema = new schema({
    id: {type: String},
    name: {type: String},
    email: {type: String},
    tags: []
})

module.exports = mongoose.model('emp', empSchema);