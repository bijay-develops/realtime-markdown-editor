var express = require('express');
var app = express();

//setting view engine to ejs
app.set('view engine', 'ejs');

//public folder to store assets
app.use(express.static(__dirname + '/public'));

//routes for app
app.get('/', function(request, response){
    response.render('pad');
});

// listen on port 8000 ( for localhost ) or the port defined by the environment
var port = process.env.PORT || 8001;
app.listen(port, function(){
    console.log('Server is running on port ' + port);
});