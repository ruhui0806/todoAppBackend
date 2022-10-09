const mongoose = require('mongoose')
const { Schema } = mongoose;

//The password hash is the output of a one-way hash function applied to the user's password.
//It is never wise to store unencrypted plain text passwords in the database! 
const userSchema = new Schema({
    username: String,
    name: String,
    passwordHash: String,
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'MongoTask'}] //reference to MongoTask Schema

})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})
const User = mongoose.model("User", userSchema)
module.exports = User
