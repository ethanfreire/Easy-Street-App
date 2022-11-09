const express = require('express');
const userRouter = express.Router();
userRouter.get('/get-test', (req, res) => {
    res.send("output something to browser");
    console.log("you hit user/get-test endpoint");
});

userRouter.post('/post-test', (req, res) => {
    const username = req.body.username;
    console.log(`HIT user/post-test endpoint username:${username}`);
    res.send(`Successfully added username: ${username}`);
});

module.exports = userRouter;