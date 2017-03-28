var express = require('express');
var app = express();
var requestHeader = {};

app.enable('trust proxy');

app.get('/api/whoami', function(req, res){
    var userAgent = req.headers['user-agent'];
    requestHeader['ipaddress'] = req.ip;
    requestHeader['language'] = req.acceptsLanguages()[0];
    requestHeader['software'] = userAgent.match(/\((.*?)\)/)[1];
    res.end(JSON.stringify(requestHeader));
})

app.listen(8080);