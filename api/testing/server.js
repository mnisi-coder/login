var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//connect to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Kota'
});
 
 
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})

//we are using app because of express
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));




var server = app.listen(3000, "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});
/*
connection.connect(function(err) {
   if (!err)
     console.log('Database is connected');
   else
     console.log('DB connection error.');
});*/

app.use(express.static(__dirname ));

app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html');
});

/*
app.post('/', function(req, res, next) {
  var data = req.body;
    console.log('request received:', data);

    connection.query('INSERT INTO users SET ?', data, function(err,res){
      if(err) throw err;
        console.log('record inserted');
    });*/  


app.post('/', function (req, res) {
   var data  = req.body;
   var name = req.body.Name;
   var email =req.body.Email;
   var password =  req.body.password;
   var role= req.body.Roles;
   
   console.log('request received: ',data);
  /* var sql ="INSERT INTO user(Name,Email,Password,Roles) VALUES ?";
   var values =[
   [name,email,]
   ];
   
   connection.query(sql,[values], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});*/
});
/*app.listen(3000);

console.log('Hi from server.js');*/