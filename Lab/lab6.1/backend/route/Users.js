const express = require("express");
const userRouter = express.Router();

let userArray = [];

userRouter.post("/users/addUser", async (req, res, next) => {
  try {
    const newUser = req.body;
    userArray.push(newUser);
    res.status(200).json({ results: userArray });
  } catch (error) {
    next(error);
  }
});

userRouter.get("/users", async (req, res, next) => {
  try {
    res.status(200).json({ results: userArray });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
