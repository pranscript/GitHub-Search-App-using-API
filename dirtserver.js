
var PORT = 8000 || process.env.PORT;
var express = require('express');
var path = require('path');
var app = express();

app.use('/', function(request, response) {
    response.render('index.html');
});

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'src/app')));


app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
