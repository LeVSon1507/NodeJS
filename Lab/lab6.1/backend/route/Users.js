const express = require('express');
const userRouter = express.Router();
userRouter.post('/users/addUser',async(req,res,next)=>{
    const userArray = []
    try {
    const newUser = req.body
    userArray.push(newUser)
        res.status(200).json({results:userArray});
    } catch (error) {
        next(error)
    }    
})
module.exports = userRouter;