var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var compression = require('compression');
var PORT=3000; 
var mongojs = require("mongojs");
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(compression());
app.use('/',express.static(__dirname));


app.get('/contactlistdata', function(req, res){
	console.log('i recived a GET request'); 
 	db.contactlist.find(function(err, docs){
 		// console.log(docs);
 		res.json(docs);
 	})
})

app.post('/addcontact/', function(req, res){
	console.log('i recived a post request'+JSON.stringify(req.body)); 
 	db.contactlist.insert(req.body, function(err, docs){
    res.json(docs);
 	})
})


app.delete('/removecontact/:id', function(req, res){
	console.log("enter"+JSON.stringify(req.params.id));
	var id = req.params.id;
	console.log('i recived a post request'+JSON.stringify(req.body)); 
 	db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, docs){
    res.json(docs);
 	})
})



app.get('/editcontact/:id', function(req, res){
	console.log("enter"+JSON.stringify(req.params.id));
	var id = mongojs.ObjectId(req.params.id);
	console.log('i recived a post request'+JSON.stringify(id)); 
 	db.contactlist.findOne({_id:id}, function(err, doc){
    res.json(doc);
 	})
})




app.put('/updatecontact/:id', function(req, res){
		var id = req.params.id;
		console.log("check"+req.body.name);
	  	db.contactlist.findAndModify( {query:{_id:mongojs.ObjectId(id)},
	  		update: {
	  			$set: {name:req.body.name,email:req.body.email,number:req.body.number}},
	  			new:true}, function(err, docs){
    res.json(docs);
 	})
})

server.listen(PORT,'0.0.0.0',function(){
	console.log("LISTEN on " + PORT);
});

