const faker = require('faker')

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = Array(20)
    .fill('x')
    .map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      image: faker.image.avatar()
    }))

  users.push({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    username: 'johndoe',
    password: '12345',
    image: faker.image.avatar()
  })

  await User.bulkCreate(users)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
