// config/database.js

const Sequelize = require('sequelize')
// const todoModel = require('../models/todo')

const sequelize = new Sequelize('todo', 'root', 'root',{
    host:'localhost', 
    dialect:'mysql'
})

module.exports = sequelize;