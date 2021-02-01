const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cleanerSchema = new Schema({
  companyName: { type: String },
  address: { type: String },
  contactNum: { type: Number },
  email: { type: String },
  contactPerson: {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String }
  }
});

const Cleaner = mongoose.model('Cleaner', cleanerSchema);

module.exports = Cleaner;