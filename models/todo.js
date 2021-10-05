// Model models/todo.js

const Sequelize = require('sequelize')

const sequelize = require('../config/database')

//define th Schema or Table
const Todo = sequelize.define('todo', {
    // column id
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // column description
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Todo