require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../model/users')
const MongoTask = require("../model/MongoTask")

const todoListRouter = require('express').Router()

// const getTokenFrom = (request) => {
// // console.log("get token from request:", request):
//     const authorization = request.get('authorization')
//     console.log("Authorization:", authorization)
// //Authorization: Bearer 
    
//     if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
//         token = authorization.split(" ")[1]
//         console.log("encoded token:", token)
//           return token
//     }
//     return null
//   }

todoListRouter.get('/', async (request, response) => {
    // // const token = getTokenFrom(request)
    // const token = request.token
    // const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET)
    // console.log("decodeToken: ", decodeToken)

    // if (!decodeToken.id) {
    //     return response.status(401).json({ error: 'token missing or invalid' })
    //   }

    // //   decodeToken:  {
    // //     user: 'root',
    // //     id: '63426f765aba46cfa67dfa92',
    // //     iat: 1665595560,
    // //     exp: 1665597360
    // //   }
    // const user = User.findById(decodeToken.id)
    const user = request.user

    const result = await MongoTask.find({})
    if (result) {
        response.json(result.map(item => item.toJSON()))
    } else {
        response.status(500).end() 
    }
    
})

todoListRouter.get('/:id', async (request, response, next) => {
    const todo = await MongoTask.findById(request.params.id)
    if (todo) {
        response.json(todo.toJSON())
    } else { response.status(404).end() }
    
    // const user = await User.findById(task.user._id)
    // if(user) {
    //     response.json(task.toJSON())
    // }
    // else {response.status(404).end()}

    // MongoTask.findById(request.params.id)
    //     .then((result) => {
    //         if (result) { response.json(result.toJSON()) }
    //         else { response.status(404).end() }
    //     })
    //     .catch(error => next(error))
})

todoListRouter.delete('/:id', (request, response, next) => {
    MongoTask.findByIdAndRemove(request.params.id)
        .then((result) => response.status(204).end())
        .catch(error => next(error))
})

todoListRouter.post("/", async(request, response, next) => {
    
    // const body = request.body
    // const user = await User.findById(body.userId)
    const user = request.user

    console.log("user:" + user)
 
    const task = new MongoTask({
        title: body.title,
        description: body.description,
        category: body.category || "Un-grouped",
        urgent: body.urgent || false,
        user: user._id
    })
    const savedTask = await task.save()
    user.tasks = user.tasks.concat(savedTask._id)
    await user.save()
    
    if(savedTask) {
        response.json(savedTask)
    }
    else {
        response.status(404).end()
    }

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
    const user = request.user
    const updatedTask = {
        title: body.title,
        description: body.description,
        category: body.category || "Un-grouped",
        urgent: body.urgent || false,
        user: user._id
    }
    MongoTask.findByIdAndUpdate(request.params.id, updatedTask, { new: true })
        .then(result => response.json(result))
        .catch(error => next(error))
})

module.exports = todoListRouter