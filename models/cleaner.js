const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cleanerSchema = new Schema({
  title: { type: String },
  fullName:{type:String},
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: Number },
  email: { type: String },
  address: { type: String },

});
cleanerSchema.methods.setFullName = function () {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};
const Cleaner = mongoose.model('Cleaner', cleanerSchema);

module.exports = Cleaner;