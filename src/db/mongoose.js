const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
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
            if(!validator.isEmail(value)){
                throw new Error('not a valid email')
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) throw new Error('age must be positive');
        }
    }
});

const me = new User({
    name: 'Ho',
    age: 10,
    email: 'realEmail@email.com'
});

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error!',error);
})