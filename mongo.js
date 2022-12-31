require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('connect to Mongo DB successfully'))
    .catch((error) => {
        console.log(
            'error occurred when connecting to Mongo DB:',
            error.message
        )
    })

const testSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    category: { type: String, required: true },
    urgent: Boolean,
})
testSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})
const Test = mongoose.model('Test', testSchema)

const test = new Test({
    title: 'Connect to MongoDB',
    description: "connect todoApp's backend to Mongo database using mongoose",
    category: 'In progress',
    urgent: true,
})
test.save().then((result) => {
    console.log('testSchema is saved to mongo DB')
    mongoose.connection.close()
})

//NOTE: this file is used for testing the connection to Mongo DB
//NOTE: store this file under the root repository of the backend. then run the file with command: $node mongo.js

// const taskSchema = new mongoose.Schema({
//     id: 20,
//     title: "Connect backend to MongoDB",
//     description: "connect todoApp's backend to Mongo database using mongoose",
//     category: "Un-grouped",
//     urgent: true
// })
// taskSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id.toString()
//         delete returnedObject._id
//         delete returnedObject.__v
//     }
// })

// module.exports = mongoose.model("MongoTask", taskSchema)
