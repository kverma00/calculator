const express = require("express");
const bodyParser = require("body-parser");

const app = express(); //bodyParser works with express.
//use this code exery single time for bodyParser
//urlencoded is for getting html requests
//bodyParser = we can access HTTP requests
app.use(bodyParser.urlencoded({extended: true})); //bodyParser.txt also works

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
  //logging in values
  var num1 = Number(req.body.num1); //Use number to change the string of req.body.num1 to number.
  var num2 = Number(req.body.num2); //num1 and num2 are the names from the index.html input types
  var result = num1 + num2;

  res.send("The result is " +result );
});

app.get("/bmiCalculator", function(req, res){

  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator", function(req, res){
  //logging in values
  var height = parseFloat(req.body.height); //Use number to change the string of req.body.num1 to number.
  var weight = parseFloat(req.body.weight); //num1 and num2 are the names from the index.html input types
  var bmi = weight/(Math.pow(height,2));

  res.send("Your BMI is " +bmi );
});

app.listen(3000, function(){
  console.log("Server is running");
});
