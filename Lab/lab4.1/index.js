const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

// Route hiển thị trang chủ
app.get('/', (req, res) => {
    res.send('<p>The Middleware that handles just /</p>');
});

// Route hiển thị danh sách người dùng
app.get('/users', (req, res) => {
    res.send(`<p>The Middleware that handles just /users</p>`);
});


// Khởi động server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
