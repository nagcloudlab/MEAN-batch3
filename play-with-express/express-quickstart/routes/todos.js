const express = require('express')
const router = express.Router()


const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo-3', completed: false },
    { id: 4, title: 'Todo-4', completed: false },
    { id: 5, title: 'Todo-5', completed: false },
    { id: 6, title: 'Todo 6', completed: false },
    { id: 7, title: 'Todo 7', completed: true },
    { id: 8, title: 'Todo-8', completed: false },
    { id: 9, title: 'Todo-9', completed: false },
    { id: 10, title: 'Todo-10   ', completed: false },
]


router.param("id", function (req, res, next) {
    const id = req.params.id
    req.id = Number.parseInt(id)
    next()
})
router.route("/")
    .get((req, res, next) => {
        const limit = req.query.limit
        const category = req.query.cat
        res.json(todos.slice(0, limit))
    })
    .post(express.json(), (req, res, next) => {
        const { title } = req.body
        //..
        let newTodo = {
            id: todos.length + 1,
            title,
            completed: false
        }
        todos.push(newTodo)
        res.status(201).json(newTodo)
    })
router.route("/:id")
    .get((req, res, next) => {
        const todo = todos.find(todo => todo.id === req.id)
        if (todo)
            res.json(todo)
        else res.status(404).json({ message: 'todo not found' })
    })
    .delete((req, res, next) => {
        const idx = todos.findIndex(todo => todo.id === req.id)
        todos.splice(idx, 1)
        res.status(200).json({ message: 'todo deleted' })
    })


module.exports = router