var express = require('express');
var app = express();
var requestHeader = {};

app.enable('trust proxy');

app.get('/api/whoami', function(req, res){
    requestHeader['ipaddress'] = req.ip;
    console.log(req.headers);
    requestHeader['language'] = req.acceptsLanguages()[0];
    var userAgent = req.headers['user-agent'];
    requestHeader['software'] = userAgent.match(/\((.*?)\)/)[0];
    res.end(JSON.stringify(requestHeader));
})

app.listen(8080);