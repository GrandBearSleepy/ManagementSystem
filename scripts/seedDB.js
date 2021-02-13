const mongoose = require("mongoose");
const db = require("../models");


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
// const customerSeed = [
//   {
//     companyName: 'Microsoft',
//     address: 'Level 10, 100 St Georges Terrace Perth WA 6000',
//     contactNum: 132058,
//     email: 'microsoft.outlook.com',
//     title: 'Mr',
//     firstName: 'Bill',
//     lastName: 'Gates',
//     fullName: 'Bill Gates',
//     email: 'microsoft.outlook.com',
//   },
//   {
//     companyName: 'IBM',
//     address: 'Level 10, 100 St Georges Terrace Perth WA 6000',
//     contactNum: '61293544000',
//     email: 'askibm@au1.ibm.com',
//     title: 'Miss',
//     firstName: 'Katrina',
//     lastName: 'Troughton',
//     fullName: 'Katrina Troughton',
//     email: 'askibm@au1.ibm.com',
//   },
//   {
//     companyName: 'Oracle',
//     address: 'Level 9 225 St Georges Terrace Perth WA',
//     contactNum: '1300 366 386',
//     email: 'admin@oracl.com',
//     title: 'Miss',
//     firstName: 'Oracle ',
//     lastName: 'Corporation',
//     fullName: 'Oracle  Corporation',
//     email: 'salesinquiry_au@oracle.com',
//   }
// ]

// db.Customer.deleteMany({})
//   .then(() => db.Customer.collection.insertMany(customerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Cleaner.deleteMany({})
  .then(() => db.Cleaner.collection.insertMany(cleanerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });