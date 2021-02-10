const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Customer
      .find(req.query)
      .populate('job')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Customer
      .findById(req.params.id)
      .populate('job')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Customer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.body)
    // console.log(req)
    db.Customer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addJob: async function (req, res) {
    const { jobId } = req.body
    console.log("customer id", req.params.id)
    console.log("job id", jobId)
    const customer = await db.Customer.findById(req.params.id)
    customer.job.push(jobId)
    const savedCustomer = await customer.save()
    res.json(savedCustomer)
  },
  remove: function (req, res) {
    db.Customer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}