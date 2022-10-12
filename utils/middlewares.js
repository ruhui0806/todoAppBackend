require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../model/users')


const logger = (request, response, next) => {
    console.log("Method: ", request.method)
    console.log("Body: ", request.body)
    console.log("Path: ", request.path)
    console.log("End-------------")
    next()
}

const unknownEndpoint = (request, response) => { response.status(404).send({ error: 'unknown endpoint' }) }

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
}

  const tokenExtractor = (request, response, next) => {
      const authorization = request.get('authorization')
      if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        token = authorization.split(" ")[1]
       request.token = token
       next()
       return

    }
    request.token = null
    next()
    return
  }

const userExtractor = async (request, response, next) => {
    const token = request.token
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({error: 'token missing or invalid'})       
    }
    request.user = await User.findById(decodedToken.id)
    next()
    return 
    }
  

module.exports = { logger, unknownEndpoint, errorHandler, tokenExtractor, userExtractor}