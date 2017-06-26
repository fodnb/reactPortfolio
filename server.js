// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


var Message = require("./models/messages.js");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

var databaseUrl = 'mongodb://localhost/myportfolio';

if(process.env.MONGODB_URI){

	mongoose.connect(process.env.MONGODB_URI)

}else{
	mongoose.connect(databaseUrl);
}

mongoose.connect("mongodb://localhost/myportfolio");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/public/index.html");
});
// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("./public"));




app.post("/api", function(req, res) {
	console.log(req.body);
	console.log(req.query);
    console.log(req.body.email);	
    console.log(req.body.message);
  Message.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }, function(err) {
    if (err) {  
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});




// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
