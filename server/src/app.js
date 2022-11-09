const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successful.");
  })
  .catch((err) => {
    console.log(err);
  });


  
app.use(cors({
  origin: "http://localhost:8000",

}));
app.use(express.json());

app.use("/api/users",userRouter);

app.use("/api/product",productRouter);




module.exports = { app };
