const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email inválido')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value){
            if(value.toLowerCase().includes('senha')){
                throw new Error('A senha não pode ser a palavar "senha"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Idade deve ser um valor positivo')
            }
        }
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]

})

userSchema.pre('save', async function (next) {

    const user = this
    
    if (user.isModified('password')) {
    
    user.password = await bcrypt.hash(user.password, 8)
    
    }
    
    next()
    
})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
    throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
    throw new Error('Unable to login')
    }
    return user
}

userSchema.methods.generateAuthToken = async function () {

    const user = this
    
    const token = jwt.sign({ _id: user._id.toString() }, 'esse_eh_um_token')
    
    user.tokens = user.tokens.concat({ token })
    
    await user.save()
    
    return token
    
    }

    userSchema.methods.toJSON = function () {

        const user = this
        
        const userObject = user.toObject()
        
        delete userObject.password
        
        delete userObject.tokens
        
        return userObject
        
        }

const User = mongoose.model('User', userSchema)

module.exports = User