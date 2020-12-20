const express = require('express'); 
const chalk = require('chalk'); 
const consola = require('consola'); 

const app = express(); 
const server = app.listen('8000'); 

app.get('/', (req, res) => {
     res.send('Express API!'); 
}); 