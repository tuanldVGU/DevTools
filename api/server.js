const express = require('express');

const app = express();

//Middlewares

//Routes
app.get('/', (req,res) => {
  res.send("Server is running");
})

//Run
const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{console.log("App running on port "+ PORT);});