'use strict'

const express = require('express') ;
require('dotenv').config();
const app = express();
const port = process.env.port || 3000 ;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index')
  });


app.listen(port , ()=> console.log('baby step '))