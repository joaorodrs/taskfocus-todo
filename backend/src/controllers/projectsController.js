const connection = require('../data/connection')

module.exports = {
    async index(request, response) {
        const username = request.headers.authorization

        const projects = await connection('projects')
            .where('username', username)
            .select('*')

        return response.json(projects)
    },

    async create(request, response) {
        const { projectName, projectColor, projectPriority } = request.body
        const username = request.headers.authorization

        await connection('projects').insert({
            projectName,
            projectColor,
            projectPriority,
            username
        })

        return response.send()
    },

    async delete(request, response) {
        const {id} = request.params

        return response.json(id)
    }
}