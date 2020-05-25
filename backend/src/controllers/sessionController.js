const connection = require('../data/connection')

module.exports = {
    async create(request, response) {
        const { username, password } = request.body

        const DBusername = await connection('users')
            .where('username', username)
            .select('username')
            .first()

        const DBpassword = await connection('users')
            .where('username', username)
            .where('password', password)
            .select('password')
            .first()

        if (!DBusername) {
            return response.status(400).json({ error: 'No account found with this username.' })
        } else if (!DBpassword) {
            return response.status(400).json({ error: 'Your password is incorrect.' })
        } else if (DBpassword.password != password) {
            return response.status(400).json({ error: 'Your password is incorrect.' })
        }
            
        return response.json(username)    
    }
}