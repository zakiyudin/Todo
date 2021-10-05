const Todo = require('../models/todo')

exports.getTodo = (req, res) => {
    Todo.findAll()
        .then(todo => {
            res.render('todo', {
                task: todo,                
            })
        })
        .catch(error => {
            console.log(error)
        })
    
}

exports.postTodo = (req, res) => {
    const description = req.body.description
    Todo.create({
        description: description
    })
     .then((result) => {
        //  console.log(result)
        console.log('Created success 👍')
        res.redirect('/')
     })
     .catch((error) => {
         console.log(error)
     })
}

exports.deleteTodo = (req, res) => {
    const idTodo = req.params.id
    // console.log(idTodo);
    Todo.findByPk(idTodo)
     .then(todo => {
         return todo.destroy()
     })
     .then(result => {
         console.log('Delete sucessfully 🔥');
         res.redirect('/')
     })
     .catch(error => console.log(error))
}