const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/users')
const loginRouter = require('express').Router()

//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

// const TOKEN_SECRET = require('crypto').randomBytes(64).toString('hex')
// console.log(TOKEN_SECRET)
// generate token via Node.js’s built-in crypto library

loginRouter.post("/", async(request, response) => {
    const {username, password} = request.body
    const user = await User.findOne({"username": request.body.username})
  
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)
    console.log("passwordCorrect:" + passwordCorrect, "user: " + user)

    if(user && passwordCorrect) {
        const userObjForToken = {user: user.username, id: user._id}
       const token  = await jwt.sign(userObjForToken, process.env.TOKEN_SECRET, { expiresIn: '1800s' })

        response.status(200).json({token, username: user.username, name: user.name})
    }
        else {
        return response.status(401).json({error: 'Invalid username or password'})
    }
})
module.exports = loginRouter


//user:{
    //     _id: new ObjectId("63426f765aba46cfa67dfa92"),
    //     username: 'root',
    //     name: 'Superuser',
    //     passwordHash: '$2b$10$A9OE6FqSToUVhfRFtg1EEONguVhISqHCQ9xGTM/gqAD2m3hfMTX7W',
    //     tasks: [
    //       new ObjectId("63446677c82ab790e409e3cd"),
    //       new ObjectId("63447c39f0b47dd96b68d994")
    //     ],
    //     __v: 2
    //      }