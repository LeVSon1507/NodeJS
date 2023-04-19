const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

// Route hiển thị trang chủ
app.get('/', (req, res) => {
    res.send('<form method="POST" action="/create-user"><input type="text" name="username"><button type="submit">Send</button></form>');
});

// Route hiển thị danh sách người dùng
app.get('/users', (req, res) => {
    const userHTML = users.map(user => `<li>${user}</li>`).join('');
    res.send(`<ul>${userHTML}</ul>`);
});

// Route thêm người dùng vào danh sách
app.post('/create-user', (req, res) => {
    const username = req.body.username;
    users.push(username);
    res.redirect('/users');
});

// Khởi động server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
