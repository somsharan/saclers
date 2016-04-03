var mongoose = require('mongoose');
<<<<<<< HEAD
var schema = mongoose.Schema;
var empSchema = new schema({
    id: {type: String},
    name: {type: String},
    email: {type: String},
    tags: []
})

module.exports = mongoose.model('emp', empSchema);
=======
var Schema = mongoose.Schema;

var empSchema = new Schema({
    empId: {type: String},
    empEmail: {type: String},
    empPass: {type: String},
    zone: {
        zoneId: {type: String},
        dailyData: { 
            inTime: {type: Date},
            outTime: {type: Date},
            timeSpent: {type: String},
            createdDate: {type: Date}
        }
    }
});

module.export = mongoose.model('empSchema', empSchema);
>>>>>>> 6e99b2a29297368fb08542ecbcd239c7716836b3
