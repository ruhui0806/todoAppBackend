const express = require("express")
const app = express()
const cors = require("cors")
const todoListRouter = require("./routes/todoListRouter")
const middleware = require('./utils/middlewares')
const logger = require('./utils/logger')
const config = require("./utils/config")
const mongoose = require('mongoose')


const bodyParser = require("body-parser")

logger.info('connecting to', config.MONGO_URI)

mongoose.connect(config.MONGO_URI).then(() => {
    logger.info('connected to Mongo DB')
})
    .catch((error) => {
        logger.error('error connecting to Mongo DB', error.message)
    })


app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(bodyParser.json())

app.use(middleware.requestLogger)

app.use("/api/todoList", todoListRouter)
app.use("/api/todoList/:id", todoListRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)