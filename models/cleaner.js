const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cleanerSchema = new Schema({
  title:{type:String},
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: Number },
  email: { type: String },
  address: { type: String },

});

const Cleaner = mongoose.model('Cleaner', cleanerSchema);

module.exports = Cleaner;