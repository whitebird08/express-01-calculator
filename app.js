var express = require('express'),
  app = express();

 app.set('view engine', 'ejs');

  app.get("/add/:num1/:num2", function(req, res){
    // console.log("This is where we are")
    var result = parseInt(req.params.num1) + parseInt(req.params.num2)
    console.log(result);
    res.send(result.toString());
  });  

  app.get("/sub/:num1/:num2", function(req, res){
    // console.log("This is where we are")
    var result = parseInt(req.params.num1) - parseInt(req.params.num2)
    console.log(result);
    res.send(result.toString());
  }); 

   app.get("/mult/:num1/:num2", function(req, res){
    // console.log("This is where we are")
    var result = parseInt(req.params.num1) * parseInt(req.params.num2)
    console.log(result);
    res.send(result.toString());
  }); 

    app.get("/div/:num1/:num2", function(req, res){
    // console.log("This is where we are")
    var result = parseInt(req.params.num1) / parseInt(req.params.num2)
    console.log(result);
    res.send(result.toString());
  }); 

  // app.get("/:operator/:num1/:num2", function(req, res){
  //   var result;
  //   if (req.params.operator === 'div') {
  //     result = parseInt(req.params.num1) / parseInt(req.params.num2)
  //   }
 
  //   res.send(result.toString())
  // })

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});

// Using res.send, make the following work:
// When a user visits /add/9/3, it should display 12
// When a user visits /sub/9/3, it should display 6
// When a user visits /mult/9/3, it should display 27
// When a user visits /div/9/3, it should display 3
// Using dynamic route segments (path parameters), refactor your code to use only one route rather than 4 separate routes.
// Make your app correctly calculate /add/1.2/1.2 to 2.4.
