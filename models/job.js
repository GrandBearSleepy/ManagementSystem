const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  job: {
    type: { type: String },
    startDate: { type: Date },
    reapts: { type: String },
    description: { type: String },
    price: { type: Number },
    asigned: false
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job