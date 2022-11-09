const express = require('express');
const productRouter = express.Router();

productRouter.get('/get-test', (req, res) => {
    res.send("output something to browser");
    console.log("you hit product/get-test endpoint");
});

productRouter.post('/post-test', (req, res) => {
    const title = req.body.title;
    console.log(`HIT product/post-test endpoint product having title:${title}`);
    res.send(`Successfully added product named title: ${title}`);
});

module.exports = productRouter;