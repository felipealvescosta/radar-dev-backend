require('dotenv').config();

const express  = require('express');
const app = express(); 
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(process.env.DB_URL,{
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology:true,
});

app.use(express.json());
app.use(routes);

module.exports = app; 