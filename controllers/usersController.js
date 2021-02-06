const db = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
  register: async function (req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      DataView.User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
        .then(userData => {
          res.send({ user: userData.id, message: 'Welcom' })
        })
    } catch (err) {
      res.send(err)
    }
  },
  login: (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(async function (userData) {
        if (!userData) {
          res.send({ user: false, message: 'No user with that email' })
          return
        }
        
        if (await bcrypt.compare(req.body.password, userData.password)) {
          res.send({ user: userData.id, message: 'Welcome Back' })
        }
        else {
          res.send({ user: false, message: 'Password Incorrect' })
        }
      })
      .catch(err => {
        res.send(err)
        console.log('Something is Wrong')
      });
  }
}