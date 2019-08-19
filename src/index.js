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

const bcrypt = require('bcryptjs');

const myFunction = async () => {
    const password = 'Red1234';
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('red1234', hashedPassword);
    console.log(isMatch);
}

myFunction();

app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})