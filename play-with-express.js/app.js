


//----------------------------------------------------------------
// using FileSystem , Http
//-------------------------------------------------------------


const express = require('express')

const app = express();

// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + "/public/index.html")
// });
// app.get('/css/bootstrap.css', (req, res, next) => {
//     res.sendFile(__dirname + "/public/css/bootstrap.css")
// });
// app.get('/images/todos.png', (req, res, next) => {
//     res.sendFile(__dirname + "/public/images/todos.png")
// });

app.use(express.static(__dirname + "/public"))
app.get('/todos', (req, res, next) => {
    const todos = [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: true },
        { id: 3, title: 'Todo-3', completed: false },
        { id: 4, title: 'Todo-4', completed: false },
        { id: 5, title: 'Todo-5', completed: false },
    ]
    res.json(todos)
})


app.listen(3000, function () {
    console.log("server listening on http://localhost:3000");
});