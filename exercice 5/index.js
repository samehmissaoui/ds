
const express = require('express');
var http = require('http');

const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
port =  8888,


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Tout va à merveille');

    if (err) throw err;
    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end(`Cette page n'existe pas`);
    }).listen(8888)