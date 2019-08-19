const express = require('express');
require('./db/mongoose')
const app = express();
const port = process.env.PORT || 3000;

const User = require('./models/user');
const Task = require('./models/task');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file,cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a word doc'));
        }
        cb(undefined,true);
    }
});

app.post('/upload', upload.single('upload'), (req,res) => {
    res.send();
});



app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})