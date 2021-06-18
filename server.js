const express = require('express');
const app = express();
const server = require('http').createServer(app);
const session = require('express-session');
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/accessmusic',{ useNewUrlParser: true, useUnifiedTopology: true });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));

const route = require('./router/main');
app.use('/', route);

app.use(express.static('public'));

server.listen(80, function() {
    console.log('Express server listening on port 80');
});
  




