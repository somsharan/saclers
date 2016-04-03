var mongoose = require('mongoose');
var schema = mongoose.Schema;

var tokenSchema = new schema({
    tokenId: {type: String},
    email: {type: String},
    createdDate :{type: String, default: Date.now}
})

module.exports = mongoose.model('token', tokenSchema);