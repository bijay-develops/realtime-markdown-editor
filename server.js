var express = require('express');
var app = express();

//setting view engine to ejs
app.set('view engine', 'ejs');

//public folder to store assets
app.use(express.static(__dirname + '/public'));

//routes for app
app.get('/', function(req, res){
    res.render('pad');
});

app.get('/(:id)', function(req, res){
    res.render('pad');
});

// get sharejs dependencies
var sharejs = require ('share');
require('redis');

//options for sharejs
var options = {
    db: {type: 'redis'},
};

//attach the expressjs server to sharejs
sharejs.server.attach(app, options);

// listen on port 8000 ( for localhost ) or the port defined by the environment
var port = process.env.PORT || 8002;
app.listen(port, function(){
    console.log('Server is running on port ' + port);
});