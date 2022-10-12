const app = require('./app') 
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})


// const logger = require('./utils/logger')

// const { request } = require("express")
// const express = require("express")
// const app = express()

// const cors = require("cors")
// const MongoTask = require('./model/MongoTask')
// const bodyParser = require("body-parser")

// const config = require("./utils/config")
// const todoListRouter = require("./routes/todoListRouter")
// const usersRouter = require("./routes/usersRouter") 
// const middleware = require('./utils/middlewares')


// app.use(express.static('build'))
// app.use(express.json())
// app.use(cors())
// app.use(bodyParser.json())
// app.use(middleware.logger)

// app.use("/api/todoList", todoListRouter)
// app.use("/api/todoList/:id", todoListRouter)
// app.use("/api/users", usersRouter)

// app.use(middleware.unknownEndpoint)

// app.listen(config.PORT, () => {
//     logger.info(`Server running on port ${config.PORT}`)
// })
