const express = require('express');
const jwt = require('jsonwebtoken');
const request = require('request')

const app = express();

request( 
  'https://api.themoviedb.org/4/list/1?api_key=c129d30e9f7745dc2daac8fefc1c81bc', 
  function(error, response, body){
  if(error){
    console.log(error)
    console.log(body)
  }else{
    console.log(response)
    console.log(body)
  }
})

// app.get('/api.themoviedb.org/3/movie/550?api_key=c129d30e9f7745dc2daac8fefc1c81bc', (req, res) => {
//   return res;
// });

const port = 5000;

app.listen(port,() => console.log(`el server inicioara en el peurto ${port}`));