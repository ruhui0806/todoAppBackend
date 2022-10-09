const mongoose = require("mongoose")
const config = require("../utils/config")

// const url = process.env.MONGODB_URI;
const url = config.MONGO_URI

// console.log('connecting to', url)
console.log('connecting to')

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("Connect to Mongo DB successfully "))
    .catch(error => { console.log("error occurred when connecting to Mongo DB:", error.message) })

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    category: { type: String, required: true },
    urgent: Boolean,
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
})

taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const MongoTask = mongoose.model("MongoTask", taskSchema)
module.exports = MongoTask

// module.exports = mongoose.model("MongoTask", taskSchema)