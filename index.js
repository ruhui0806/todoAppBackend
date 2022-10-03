const { request } = require("express")

const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const bodyParser = require("body-parser")
const logger = require('./utils/logger')

const server = http.createServer(app)
const PORT = config.PORT


server.listen(PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})