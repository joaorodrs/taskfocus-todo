const connection = require('../data/connection')

module.exports = {
    async create(request, response) {
        const { taskTitle, taskPriority, pomodoros, taskDescription } = request.body
        const username = request.headers.authorization

        const [id] = await connection('tasks').insert({
            taskTitle,
            taskPriority,
            pomodoros,
            taskDescription,
            username
        })

        return response.json({ id })
    },

    async indexAll(request, response) {
        const username = request.headers.authorization

        const tasks = await connection('tasks')
            .where('username', username)
            .select('*')

        return response.json(tasks)
    },

    async indexForNow(request, response) {
        const username = request.headers.authorization

        const tasks = await connection('tasks')
            .where('username', username)
            .where('taskPriority', '3')
            .select('*')

        return response.json(tasks)
    },

    async indexToday(request, response) {
        const username = request.headers.authorization

        const tasks = await connection('tasks')
            .where('username', username)
            .where('taskPriority', '2')
            .select('*')

        return response.json(tasks)
    },

    async indexTomorrow(request, response) {
        const username = request.headers.authorization

        const tasks = await connection('tasks')
            .where('username', username)
            .where('taskPriority', '1')
            .select('*')

        return response.json(tasks)            
    },

    async indexThisWeek(request, response) {
        const username = request.headers.authorization
        
        const tasks = await connection('tasks')
            .where('username', username)
            .where('taskPriority', '0')
            .select('*')

        return response.json(tasks)
    },

    async indexTakeTime(request, response) {
        const username = request.headers.authorization

        const tasks = await connection('tasks')
            .where('username', username)
            .where('pomodoros', '>=', '5')
            .select('*')

        return response.json(tasks)
    },

    async indexOne(request, response) {
        const username = request.headers.authorization

        const tasks = await connection('tasks')
            .where('username', username)
            .where('taskPriority', '>=', '1')
            .where('pomodoros', '>=', '2')
            .select('*')
            .limit(1)

        console.log(tasks)

        return response.json(tasks)
    },

    async alterate(request, response) {
        const { taskTitle, taskPriority, pomodoros, taskDescription } = request.body
        const username = request.headers.authorization
        const { id } = request.params

        const task = await connection('tasks')
            .where('id', id)
            .select('username')
            .first()

        if (task.username != username) {
            return response.stasus(401).json({ error: 'Operation not permitted.' })
        }

        await connection('tasks')
            .where('id', id)
            .update({
                taskTitle,
                taskPriority,
                pomodoros,
                taskDescription,
                username
            })

        return response.status(204).send()
    },

    async delete(request, response) {
        const username = request.headers.authorization
        const { id } = request.params

        const task = await connection('tasks')
            .where('id', id)
            .select('username')
            .first()
        
        if (task.username !== username) {
            return response.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection('tasks')
            .where('id', id)
            .delete()

        return response.status(204).send()
    }
}