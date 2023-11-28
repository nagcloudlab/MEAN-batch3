

const express = require('express')
const logger = require('./middlewares/logger')
const morgan = require('morgan')
const todos = require('./routes/todos')

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

// app.use(logger);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(__dirname + "/public"))
app.use("/todos", todos)
app.listen(3000, function () {
    console.log("server listening on http://localhost:3000");
});