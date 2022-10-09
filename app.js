const express = require("express")
const app = express()
const cors = require("cors")
const MongoTask = require('./model/MongoTask')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const logger = require('./utils/logger')

const config = require("./utils/config")
const todoListRouter = require("./routes/todoListRouter")
const usersRouter = require("./routes/usersRouter")
const middleware = require('./utils/middlewares')

logger.info('connecting to', config.MONGO_URI)

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("Connect to Mongo DB successfully "))
    .catch(error => { console.log("error occurred when connecting to Mongo DB:", error.message) })

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(middleware.logger)

app.use("/api/users", usersRouter)
app.use("/api/todoList", todoListRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
