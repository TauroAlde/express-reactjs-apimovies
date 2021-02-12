const express = require('express');
const router = express.Router();
const axios = require('axios');
const {promisify} = require('util');
const redis = require('redis');

//client redis
const movie = redis.createClient({
  host: '127.0.0.1',
  port: 6379,
});


const GET_ASYNC = promisify(movie.get).bind(movie);
const SET_ASYNC = promisify(movie.set).bind(movie);

router.get('/' , async (req, res, next) => {
  try {
    const reply = await GET_ASYNC('movies');
    if(reply){
      // console.log(reply);
      console.log('using cache')
      res.send(JSON.parse(reply))
      return
    }
    const response = await axios.get('https://api.themoviedb.org/4/list/1?api_key=c129d30e9f7745dc2daac8fefc1c81bc');
    const saveResult = await SET_ASYNC('movies', JSON.stringify(response.data.results));
    console.log('new data cachet');
    res.send(saveResult);
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = router;