const { request } = require("express")
const express = require("express")
const app = express()
const cors = require("cors")
const MongoTask = require('./model/MongoTask')
const bodyParser = require("body-parser")

const config = require("./utils/config")
const todoListRouter = require("./routes/todoListRouter")
const middleware = require('./utils/middlewares')
const logger = require('./utils/logger')

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use(middleware.logger)

app.use("/api/todoList", todoListRouter)
app.use("/api/todoList/:id", todoListRouter)


app.use(middleware.unknownEndpoint)


const PORT = config.PORT
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

app.listen(PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})