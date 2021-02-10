const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Cleaner
     
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Cleaner
      
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Cleaner
     
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Cleaner
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Cleaner
     
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addJob: async function (req, res) {
    const { jobId } = req.body
    console.log("cleaner id", req.params.id)
    console.log("job id", jobId)
    const cleaner = await db.Cleaner.findById(req.params.id)
    cleaner.job.push(jobId)
    const savedCleaner = await cleaner.save()
    res.json(savedCleaner)
  },
} 