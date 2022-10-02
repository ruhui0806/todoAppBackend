const express = require("express")
const app = express()
const cors = require("cors")
const MongoTask = require('./model/MongoTask')
const bodyParser = require("body-parser")

const config = require("./utils/config")
const todoListRouter = require("./routes/todoListRouter")
const middleware = require('./utils/middlewares')



app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use(middleware.logger)

app.use("/api/todoList", todoListRouter)
app.use("/api/todoList/:id", todoListRouter)


app.use(middleware.unknownEndpoint)
