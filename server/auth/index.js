const router = require('express').Router()

const {User} = require('../db/models')

module.exports = router

router.put('/login', async (req, res, next) => {
  try {
    const {username, password} = req.body
    const user = await User.findOne({
      where: { username }
    })

    if (!user || !user.correctPassword(password)) {
      res.status(401).send('Incorrect username and/or password')
    } else {
      req.login(user, err => err ? next(err) : res.json(user))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/register', async (req, res, next) => {
  try {
    const {firstName, lastName, email, username, password} = req.body
    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      password
    })

    req.login(user, err => err ? next(err) : res.json(user))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', (req, res, next) => {
  if (req.user) {
    res.json(req.user)
  } else {
    res.sendStatus(404)
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  req.user = null
  res.sendStatus(204)
})
