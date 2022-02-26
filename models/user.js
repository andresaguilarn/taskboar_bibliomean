const mongoose = require('mongoose')
const jwt = require('jsonwebtoke')
const { default: mongoose } = require('mongoose')
const { type } = require('os')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
    },
     email:{
         type:String,
    },
     password:{
         type:String,
    },
     date:{
         type:Date,
         default:Date.now
    }
}) 


userSchema.method.generateJWT = function (){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    })
}
const User = new mongoose.model('user',userSchema)

module.exports.User = User
