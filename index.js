
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
    next();
});

const todoRoutes = require("./routes/todos");

app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

const dbConnect = require("./config/database");

dbConnect();

