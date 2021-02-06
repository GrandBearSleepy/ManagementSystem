const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
);

const customerSeed = [
  {
    companyName: 'TEst',
    address: 'TEstAddress',
    contactNum: 1234567,
    email: 'email@emial.com',
    title: 'Mr',
    firstName: 'TE',
    lastName: 'SET',
    fullName: 'TE SET',
    job: {
      type: 'One',
      startDate: { type: Date },
      reapts: 'some',
      description: 'deep',
      price: 150,
      asigned: false,
      cleaner: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Customer'
        }]
    }
  }
  
  
   
];

db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
