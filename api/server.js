const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config');
const app = express();

//DB connect 


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
  console.log('Connect DB success');
});
mongoose.set('useCreateIndex', true);

//Middlewares


//Routes
const docRoute = require('./routes/documents');
app.use('/api/docs',docRoute);

//Run
const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{console.log("App running on port "+ PORT);});