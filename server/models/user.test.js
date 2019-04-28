const db = require('../index')
const User = require('./user')

beforeEach(() => {
  return db.sync({force: true})
})

describe('User model', () => {
  let johnDoe
  let johnDoeUser

  describe('instance method correctPassword', () => {
    beforeEach(async () => {
      johnDoe = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        username: 'johndoe',
        password: '12345'
      }

      johnDoeUser = await User.create(johnDoe)
    })

    test('should return true if the correct password is given', () => {
      expect(johnDoeUser.correctPassword('12345')).toBe(true)
    })

    test('should return false if the incorrect password is given', () => {
      expect(johnDoeUser.correctPassword('123456')).toBe(false)
    })
  })

  describe('is created when', () => {
    beforeEach(async () => {
      johnDoe = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        username: 'johndoe',
        password: '12345'
      }

      johnDoeUser = await User.create(johnDoe)
    })

    test('a valid first name is provided', () => {
      expect.assertions(1)
      expect(johnDoeUser.firstName).toBe('John')
    })

    test('a valid last name is provided', () => {
      expect.assertions(1)
      expect(johnDoeUser.lastName).toBe('Doe')
    })

    test('a valid email address is provided', () => {
      expect.assertions(1)
      expect(johnDoeUser.email).toBe('johndoe@gmail.com')
    })

    test('a valid username is provided', () => {
      expect.assertions(1)
      expect(johnDoeUser.username).toBe('johndoe')
    })
  })
})
