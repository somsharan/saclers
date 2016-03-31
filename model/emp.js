var mongoose = require('mongoose');
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