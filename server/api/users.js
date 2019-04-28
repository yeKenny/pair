const router = require('express').Router()

const {User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.json(allUsers)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const user = await User.findByPk(id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})