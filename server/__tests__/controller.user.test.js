const superTest = require('supertest')
// const createUser = require('../controllers/user')

const mongoose = require('mongoose')

describe('A new user is posted to the database', () => {
  const app = require('../index')
  const request = superTest(app)
  const User = mongoose.connection.model('User')

  beforeAll(async () => {})

  afterAll(async () => {
    app.close()
    await mongoose.connection.dropDatabase()
    await mongoose.disconnect()
  })

  it('should save a user to the database', (done) => {
    const firstName = 'Willy'
    const lastName = 'Wonka'
    const email = 'willy@thechocolatefactory.com'
    const password = 'codeworks'

    request
      .post('/register')
      .set('Content-Type', 'application/json')
      .send({ firstName, lastName, email, password })
      .expect(500)
      .end(() => {
        User.find((err, users) => {
          expect(users.length).toBe(1)
          done()
        })
      })
  })
})
