const express = require('express')
const cors = require('cors');
const userRouter = require('./route/Users');

const app = express()
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', userRouter)

// 404 Not Found
app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found on the server</h1>");
});

//app listen on port 3001
app.listen(3001, () => {
    console.log('Server is running on port 3001')
})