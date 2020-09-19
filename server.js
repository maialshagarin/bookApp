'use strict'

const express = require('express') ;
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000 ;
const superagent = require('superagent')


app.set('view engine', 'ejs');

app.use(express.static('./public'));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// To Read the body of the POST HTTP requsets
app.use(express.urlencoded());


app.get('/', getSearchHanlde);

  function getSearchHanlde(req, res) {
    res.render('pages/index');
  }

  app.post('/searches',  postSearchfunction);
  function postSearchfunction(req , res ){
    let data = req.body ; 
    console.log(data)
    let queryName = Object.keys(data)[1];
    let name = data.BookTitle ;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${name}+in${queryName}`;
    superagent.get(url)
              .then(result =>{
                console.log("result" , result)
              })

  }



app.listen(port , ()=> console.log('baby step '))