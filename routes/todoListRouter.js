require('dotenv').config()
const User = require('../model/users')

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

todoListRouter.delete('/:id', (request, response, next) => {
    MongoTask.findByIdAndRemove(request.params.id)
        .then((result) => response.status(204).end())
        .catch(error => next(error))
})

todoListRouter.post("/", async(request, response, next) => {
    console.log(request.body)
    const body = request.body
    const user = await User.findById(body.userId)
    console.log(user)

    const task = new MongoTask({
        title: body.title,
        description: body.description,
        category: body.category,
        urgent: body.urgent,
        user: user._id
    })
    const savedTask = await task.save()
    user.tasks = user.tasks.concat(savedTask._id)
    await user.save()
    response.json(savedTask)
    
    // task.save()
    //     .then(result => {
    //         console.log("testSchema is saved to mongo DB")
    //         response.json(result.toJSON())
    //         // mongoose.connection.close()
    //     })
    //     .catch(error => next(error))
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