const express = require('express')

const sessionController = require('./controllers/sessionController')
const tasksController = require('./controllers/tasksController')
const projectsController = require('./controllers/projectsController')
const usersController = require('./controllers/usersController')

const routes = express.Router()

routes.post('/session', sessionController.create) // <== to login with a username and password

routes.post('/tasks', tasksController.create) // <== to create a new task
routes.get('/tasks', tasksController.indexAll) // <== to list all the tasks from the specific user

routes.get('/tasksfornow', tasksController.indexForNow) // <== to list the task with priority 3

routes.get('/taskstoday', tasksController.indexToday) // <== to list tasks with priority 2

routes.get('/taskstomorrow', tasksController.indexTomorrow) // <== to list tasks with priority 1

routes.get('/tasksthisweek', tasksController.indexThisWeek) // <== to list tasks with priority 0

routes.get('/taskstaketime', tasksController.indexTakeTime) // <== to list tasks with more than 5 pomodoros

routes.get('/tasksone', tasksController.indexOne) // <== to list one task to do now

routes.get('/taskdetail', tasksController.indexDetail) // <== show the details of the task

routes.delete('/tasks/:id', tasksController.delete) // <== to delete a task from specific user
routes.put('/tasks/:id', tasksController.alterate) // <== to alterate a task from specific user

routes.post('/users', usersController.create) // <== to create a new user
routes.get('/users', usersController.index) // <== to list all the users (only in development)
routes.delete('/users', usersController.delete) // <<= to delete users (only in development)

//routes.post('/projects', projectsController.create) // <== to create a new project
//routes.get('/projects', projectsController.index) // <== to list all the projects from the especific user
//routes.delete('/projects', projectsController.delete) // <== to delete a project from specific user

module.exports = routes

/**
 * Users:
 * Usuários serão cadastrados (username, email, password) <<= OK
 * 
 * Funcionalidades:
 *  Vão existir tarefas
 *      Tarefas poderão ser criadas <<= OK
 *      Tarefas poderão ser repetidas <<= OK
 *      Tarefas poderão ser agendadas <<= TAREFA DO FRONT-END
 *      Tarefas poderão ser editadas <<= OK
 *      Tarefas poderão ser excluídas <<= OK
 * 
 *                ==>==>=>> TUDO OK <<=<==<==
 */