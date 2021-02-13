const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    type: { type: String },
    startDate: { type: Date },
    reapts: { type: String },
    description: { type: String },
    price: { type: Number },
    assigned: { type: Boolean, default: false },
    from: { type: String },
    to:{type:String}
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job