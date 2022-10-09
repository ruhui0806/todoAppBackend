require('dotenv').config()
const User = require('../model/users')
const bcrypt = require('bcrypt')

const usersRouter = require('express').Router()

usersRouter.post('/', async(request, response, next) => {
    const {username, password, name} = request.body
    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return response.status(400).json({
        error: 'username must be unique'
      })
    }
    const passwordHash = await bcrypt.hash(password, 10)
    
    const user = new User ({
        username,
        name,
        passwordHash
    })

    const savedUser = await user.save()
    response.status(201).json(savedUser) //change the savedUser from json format (from UserSchema) to JS obj.
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('tasks')
    response.json(users)
    console.log("users page")
  })

module.exports = usersRouter