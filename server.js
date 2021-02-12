const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT_LOCAL = 5000;
const REDIS_PORT = 6379;

//setting
app.set('port', process.env.PORT || PORT_LOCAL);

//Midelware
app.use(morgan('dev'));
app.use(express.json());

//router
app.use('/api/movies', require('./routes/routes'));

//static files
app.use(express.static(path.join(__dirname,'movie_app', 'public')))

//server start
app.listen(app.get('port'),() => {
  console.log(`server on port ${app.get('port')} `)
});