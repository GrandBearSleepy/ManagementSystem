const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/managementDB"
);

const cleanerSeed = [{
  title: 'Mr',
  fullName: 'Phillip Soto',
  firstName: 'Phillip',
  lastName: 'Soto',
  phone: '02154258321',
  email: 'phillip.soto@example.com',
  address: '89 Atkinson Way BALLA BALLA WA',
},
  {
    title: 'Mr',
    fullName: 'Josephine Lawson',
    firstName: 'Josephine',
    lastName: 'Lawson',
    phone: '0411258321',
    email: 'phillip.soto@example.com',
    address: '89 Atkinson Way BALLA BALLA WA',
  },
  {
    title: 'Miss',
    fullName: 'Phillip Soto',
    firstName: 'Phillip',
    lastName: 'Soto',
    phone: '02154258321',
    email: 'josephine.lawson@example.com',
    address: '67 Springhill Bottom Road PERTH WA',
  },
  {
    title: 'Miss',
    fullName: 'Layla Montgomery',
    firstName: 'Layla',
    lastName: 'Montgomery',
    phone: '049514541',
    email: 'layla.montgomery@example.com',
    address: '45 Ocean Street SYDNEY New South Wales',
  },
  {
    title: 'Mr',
    fullName: 'Tyler Obrien',
    firstName: 'Tyler',
    lastName: 'Obrien',
    phone: '0444258321',
    email: 'tyler.obrien@example.com',
    address: '86 Ocean Street SYDNEY New South Wales',
  }
]


db.Cleaner.remove({})
  .then(() => db.Cleaner.collection.insertMany(cleanerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });