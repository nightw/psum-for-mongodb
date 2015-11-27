#!/usr/bin/env node

var http = require('http');
var url = require('url');
var Q = require('q');
var MongoClient = require('mongodb').MongoClient;

var port = process.env.PORT || 5000;
var mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017";
var db = null;

var server = http.createServer(function(req, res) {
  if (req.method == 'GET' && url.parse(req.url).pathname == '/create') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Request came in successfully!\n");
  } else {
    res.statusCode = 404;
    res.end("Only /create URL is supported currently");
  }
});

function init(callback) {
  try {
    // Use connect method to connect to the Server 
    MongoClient.connect(mongo_uri, function(err, _db) {
        if (err) {
            callback(err);
        }
        db = _db;
        console.log("Connected correctly to MongoDB server.");
    });
    callback(null);
  } catch(err) {
    callback(err);
  }
}

server.on('close', function() {
    db.close();
    console.log('Disconnected from MongoDB');
    console.log('Stopping server ...');
});

process.on('SIGINT', function() {
  server.close();
});

init(function start(err){
  if (err) {
    console.error("Error during starting the app: " + err.message);
    process.exit(1);
  } else {
    server.listen(port);
    console.log("Server successfully started on port " + port);
  }
});
