var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    // res.send('Hi there from cloud9');
    res.json({
        message: 'Hi there'
    });
});

app.listen(port, function() {
    console.log('The app is running on port:' + port);
});