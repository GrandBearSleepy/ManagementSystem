const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    customerName: { type: String },
    address:{type:String},
    jobDate: { type: Date },
    invoiceMonth:{type:Date},
    singlePrice: { type: Number },
    totalPrice: { type: Number },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice