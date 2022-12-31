require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('Connected to Mongo DB successfully'))
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
