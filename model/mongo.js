const mongoose = require("mongoose")
require('dotenv').config()

const url = process.env.MONGODB_URI;

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log("connect to Mongo DB"))
    .catch(error => { console.log("error occurred when connecting to Mongo DB:", error.message) })

const taskSchema = new mongoose.Schema({
    id: 20,
    title: "Connect backend to MongoDB",
    description: "connect todoApp's backend to Mongo database using mongoose",
    category: "Un-grouped",
    urgent: true
})
taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("MongoTask", taskSchema)

