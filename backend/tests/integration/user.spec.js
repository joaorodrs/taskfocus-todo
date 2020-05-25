const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/data/connection')

describe('USERS', () => {
    beforeEach(async() => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async() => {
        await connection.destroy()
    })

    it('should be able to create a new user', () => {
        request(app).post('/users').send({
            username: "joao_user",
            email: "jpjoao1001@gmail.com",
            password: "26112805"
        })
    })
})