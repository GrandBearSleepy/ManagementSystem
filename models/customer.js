const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  companyName: { type: String },
  address: { type: String },
  contactNum: { type: String },
  email: { type: String },
  title: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  email: { type: String },
  job: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Job'
    }
  ]
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
