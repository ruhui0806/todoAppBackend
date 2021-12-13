require('dotenv').config()
const MongoTask = require("../model/MongoTask")

const todoListRouter = require('express').Router()

todoListRouter.get('/', async (request, response) => {
    try {
        const result = await MongoTask.find({})
        response.json(result.map(item => item.toJSON()))
    }
    catch (err) { response.status(500).json({ message: err.message }) }
})

todoListRouter.get('/:id', (request, response, next) => {
    MongoTask.findById(request.params.id)
        .then((result) => {
            if (result) { response.json(result.toJSON()) }
            else { response.status(404).end() }
        })
        .catch(error => next(error))
})

todoListRouter.delete('/api/todoList/:id', (request, response, next) => {
    MongoTask.findByIdAndRemove(request.params.id)
        .then((result) => response.status(204).end())
        .catch(error => next(error))
})

todoListRouter.post("/", (request, response, next) => {
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
    task.save()
        .then(result => {
            console.log("testSchema is saved to mongo DB")
            response.json(result.toJSON())
            // mongoose.connection.close()
        })
        .catch(error => next(error))
})

todoListRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const updatedTask = {
        title: body.title,
        description: body.description,
        category: body.category || "Un-grouped",
        urgent: body.urgent || false
    }
    MongoTask.findByIdAndUpdate(request.params.id, updatedTask, { new: true })
        .then(result => response.json(result))
        .catch(error => next(error))
})

module.exports = todoListRouter