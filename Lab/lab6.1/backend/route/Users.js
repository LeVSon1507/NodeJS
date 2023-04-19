const express = require('express');


const app = express();

const userArray = []

app.post('/users/addUser',(req,res,next)=>{
    const newUser = req.body
})