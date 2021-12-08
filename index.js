const { request } = require("express")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

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
    response.json(todoList)
})
app.get('/api/todoList/:id', (request, response) => {
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
    const id = Number(request.params.id)
    todoList = todoList.filter(todo => todo.id !== id)
    response.status(204).end()
})
app.post("/api/todolist", (request, response) => {
    const task = request.body
    todoList = todoList.concat(task)
    response.json(todoList)
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})