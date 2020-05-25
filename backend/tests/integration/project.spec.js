const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/data/connection')

describe('PROJECT', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async() => {
        await connection.destroy()
    })

    it('should be able to create a new project', () => {
        request(app).post('/projects').set('Authorization', 'joao_user').send({
            projectName: "School",
            projectColor:  "red",
            projectPriority: "3",
        })
    })

    it('should be able to list all the projects from specific user', async () => {
        await request(app)
            .get('/projects')
            .set('Authorization', 'joao_user')
    })
})