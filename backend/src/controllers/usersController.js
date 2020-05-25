const connection = require('../data/connection')

module.exports = {
    async create(request, response) {
        const { username, email, password } = request.body // pega os dados do body em JSON

        const DBuser = await connection('users') // a variável DBuser armazena o nome de usuário que está no banco de dados
            .where('username', username)
            .select('username')
            .first()

        const DBemail = await connection('users') // a variável DBemail armazena o endereço de email que está no banco de dados
            .where('email', email)
            .select('email')
            .first()

        if (DBuser) { // testa se o usuário que foi inserido no BODY já existe no DB
            return response.status(400).json({ error:'Username already picked.' })
        } else if (DBemail) { // testa se o endereço de email que foi inserido no BODY realmente existe no DB
            return response.status(400).json({ error: 'This email is already in use.' })
        } else if (password.length < 8) { // testa se a senha tem mais de 8 caracteres
            return response.status(400).json({ error: 'Password must have 8 (eight) characters' })
        }
        
        await connection('users').insert({
            username,
            email,
            password
        })

        return response.send()
    },

    async index(request, response) {
        const users = await connection('users')
            .select('*')

        return response.json(users)
    },

    async delete(request, response) {
        const username = request.headers.authorization
        await connection('users').where('username', username).delete()

        return response.send()
    }
}