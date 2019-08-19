const express = require('express');
require('./db/mongoose')
const app = express();
const port = process.env.PORT || 3000;

const User = require('./models/user');
const Task = require('./models/task');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'});
    console.log(token);

    const data = jwt.verify(token,'thisismynewcourse');
    console.log(data);
}

myFunction();

app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})