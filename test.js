#!/usr/bin/env node

var MongoClient = require('mongodb').MongoClient;

//var mongo_uri = process.env.MONGO_URI || "mongodb://test:test@localhost:27017/foobar";
var mongo_uri = process.env.MONGO_URI || "mongodb://5191e39683f554ac7570ed91:fadd8e1a3da3c2e475949b96@192.168.197.191/14b0136341cc818d1e56f0d2";

MongoClient.connect(mongo_uri, function(err, db) {
    if (err) {
        console.error(err);
    } else {
        var currentCollection = db.collection('foobar');
        currentCollection.insert({hello:'world'});
    }
    db.close();
});
