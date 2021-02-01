const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  companyName: { type: String },
  address: { type: String },
  contactNum: { type: Number },
  email: { type: String },
  contactPerson: {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: Number },
    email: { type: String }
  },
  jobs: {
    content: { type: Array }
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;