var express = require('express'),
  app = express();

  app.get("/add/9/3", function(req, res){
    res.send("12");
  });

  app.get("/sub/9/3", function(req, res){
    res.send("6");
  });

  app.get("/mult/9/3", function(req, res){
    res.send("27");
  });

  app.get("/div/9/3", function(req, res){
    res.send("3");
  });


app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
console.log(req.params);

// Using res.send, make the following work:

// When a user visits /add/9/3, it should display 12
// When a user visits /sub/9/3, it should display 6
// When a user visits /mult/9/3, it should display 27
// When a user visits /div/9/3, it should display 3
