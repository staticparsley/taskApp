const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('not a valid email')
            }
        },
    },
    password: {
        type: String,
        requried: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error('age must be positive');
        }
    }

});

UserSchema.pre('save', async function(next) {
    const user = this;
    console.log('just before saving');
    next();
})

const User = mongoose.model('User', UserSchema);



module.exports = User;