
const express = require('express')
const logger = require('./middlewares/logger')
const morgan = require('morgan')
const cors = require('cors')
const todos = require('./routes/todos')

const app = express();
app.use(cors({
    origin: "http://localhost:4200"
}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use("/api/v1/todos", todos)
app.listen(3000, function () {
    console.log("server listening on http://localhost:3000");
});