const express = require('express');
const route = express.Router()
const todoController = require('../controllers/todoController')

route.get('/', todoController.getTodo)

route.post('/add-todo', todoController.postTodo)
route.get('/delete/:id', todoController.deleteTodo)

module.exports = route;