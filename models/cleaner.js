const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cleanerSchema = new Schema({
  title: { type: String },
  fullName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: Number },
  email: { type: String },
  address: { type: String },
  job: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }
  ]
});

const Cleaner = mongoose.model('Cleaner', cleanerSchema);

module.exports = Cleaner;