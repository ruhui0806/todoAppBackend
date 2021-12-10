const { request } = require("express")
const express = require("express")
const app = express()
const cors = require("cors")
const MongoTask = require('./model/MongoTask')
const bodyParser = require("body-parser")
// const mongoose = require("mongoose")
require('dotenv').config()


app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
// const url = process.env.MONGODB_URI
// mongoose.connect(url)

let todoList = [
    {
        id: 5,
        title: "Develop app",
        description: "description function test 453452",
        category: "Overdue",
        urgent: true
    },
    {
        id: 7,
        title: "This is a test from postman",
        description: "description function test 3452",
        category: "Un-grouped",
        urgent: true
    },
    {
        id: 15,
        title: "NestModal",
        description: "Test NestModal category funct",
        category: "Complete",
        urgent: true
    },
    {
        id: 16,
        title: "Test grouping",
        description: "test up- grouped",
        category: "Complete",
        urgent: true
    },
    {
        id: 17,
        title: "Test auto",
        description: "test autocapitalize successfully",
        category: "Complete",
        urgent: false
    },
    {
        id: 18,
        title: "Calendar",
        description: "add calendar function",
        category: "Unstart",
        urgent: false

    },
    {
        id: 19,
        title: "Deadline",
        description: "add deadline function",
        category: "In progress",
        urgent: false
    }
]//not in use anymore when the backend database is connected to Mongo DB

// app.get("/", (request, response) => {
//     response.send("<h1>This is backend website</h1>")
// })
// app.get("/api/todoList", (request, response) => {
//     response.json(todoList)
// })
app.get('/api/todoList', (request, response) => {
    MongoTask.find({})
        .then((result) => response.json(result.map(item => item.toJSON())))
})
// app.get('/api/todoList/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const todo = todoList.find(todo => todo.id === id)
//     if (todo) {
//         response.json(todo)
//     }
//     else {
//         response.status(404).end()
//     }
// })
app.get('/api/todoList/:id', (request, response) => {
    MongoTask.findById(request.params.id)
        .then((result) => response.json(result.toJSON()))
})

// app.delete('/api/todoList/:id', (request, response) => {
//     const id = Number(request.params.id)
//     todoList = todoList.filter(todo => todo.id !== id)
//     response.status(204).end()
// })
app.delete('/api/todoList/:id', (request, response) => {
    MongoTask.findByIdAndRemove(request.params.id)
        .then((result) => response.status(204).end)
})

app.post("/api/todolist", (request, response) => {
    // const task = request.body
    // todoList = todoList.concat(task)
    // response.json(todoList)
    console.log(request.body)
    const body = request.body
    const task = new MongoTask({
        title: body.title,
        description: body.description,
        category: body.category,
        urgent: body.urgent
    })
    task.save().then(result => {
        console.log("testSchema is saved to mongo DB")
        response.json(result.toJSON())
        // mongoose.connection.close()
    })
})
app.put('/api/todoList/:id', (request, response) => {
    const body = request.body

    const updatedTask = {
        title: body.title,
        description: body.description,
        category: body.category || "Un-grouped",
        urgent: body.urgent || false
    }
    MongoTask.findByIdAndUpdate(request.params.id, updatedTask, { new: true })
        .then(result => response.json(result))
})

// const PORT = process.env.PORT || 8000
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})