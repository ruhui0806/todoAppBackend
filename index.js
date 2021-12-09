const { request } = require("express")
const express = require("express")
const app = express()
const cors = require("cors")
// const mongoose = require("mongoose")
require('dotenv').config()
const MongoTask = require('./model/MongoTask')


app.use(express.static('build'))
app.use(express.json())
app.use(cors())

// const url = process.env.MONGODB_URI

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
]


app.get("/", (request, response) => {
    response.send("<h1>This is backend website</h1>")
})
app.get("/api/todoList", (request, response) => {
    // MongoTask.find({}).then(todoList => { response.json(todoList) })
    response.json(todoList)
})
app.get('/api/todoList/:id', (request, response) => {
    // MongoTask.findById(request.params.id).then(task => {
    //     response.json(task)
    // })
    const id = Number(request.params.id)
    const todo = todoList.find(todo => todo.id === id)
    if (todo) {
        response.json(todo)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/api/todoList/:id', (request, response) => {
    // const id = Number(request.params.id)
    // todoList = todoList.filter(task => task.id !== id)
    const id = Number(request.params.id)
    todoList = todoList.filter(todo => todo.id !== id)
    response.status(204).end()
})
app.post("/api/todolist", (request, response) => {
    // const body = request.body

    // const task = new MongoTask({
    //     title: body.title,
    //     description: body.description,
    //     category: body.category || "Un-grouped",
    //     urgent: body.urgent || false
    // })
    // task.save().then(savedTask => response.json(savedTask))
    const body = request.body
    const task = {
        id: body.id,
        title: body.title,
        description: body.description,
        category: body.category || "Un-grouped",
        urgent: body.urgent || false
    }
    todoList = todoList.concat(MongoTask)
    response.json(task)
})

const PORT = process.env.PORT || 8000
// const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})