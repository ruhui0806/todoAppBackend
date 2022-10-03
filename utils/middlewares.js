const logger = require('./logger')

const requestLogger = (request, response, next) => {
    console.log("Method: ", request.method)
    console.log("Body: ", request.body)
    console.log("Path: ", request.path)
    console.log("End-------------")
    next()
}

const errorHandler = (request, response, next) => {
    logger.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}


const unknownEndpoint = (request, response) => { response.status(404).send({ error: 'unknown endpoint' }) }

module.exports = { requestLogger, errorHandler, unknownEndpoint }