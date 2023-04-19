const express = require('express');
const app = express(); 
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const users = [];

// Route hiển thị trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
});

// Route hiển thị danh sách người dùng
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/users.html'));
});


// Khởi động server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
