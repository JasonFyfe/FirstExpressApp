var express = require("express");
var app = express();
var port = 3000;

// "/" => "Hi there"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "WOOF!"
app.get("/dog", function(req, res){
    res.send("WOOF!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send(`Welcome to r/${subreddit}`);
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    var title = req.params.title;
    res.send(`Comments for ${title}`);
});

// Handle 404
app.get("*", function(req, res){
    res.send("You are a star: 404");
});

// Tell express to listen for requests (Start the server)
app.listen(port, function(){
    console.log(`Server listening on ${port}`);
});