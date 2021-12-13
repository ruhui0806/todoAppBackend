const logger = (request, response, next) => {
    console.log("Method: ", request.method)
    console.log("Body: ", request.body)
    console.log("Path: ", request.path)
    console.log("End-------------")
    next()
}

const unknownEndpoint = (request, response) => { response.status(404).send({ error: 'unknown endpoint' }) }

module.exports = { logger, unknownEndpoint }