// index.js

const express = require('express');
const routerTodo = require('./routes/todo')
const sequelize = require('./config/database')
const todoModel = require('./models/todo')
const app = express()

const PORT = 2000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/static', express.static('public'))
app.set('view engine', 'ejs')

app.use(routerTodo)

sequelize.sync({force:true})
    .then(result => {
        console.log(result);
        app.listen(PORT, () => {
            console.log(`server up and running at ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })

