const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//body parser is in our express
//use urlencoded if you want to read post from ur html form
//extended is for nested objects
app.use(bodyParser.urlencoded({extended: true}));

//to send a file instead of relative path we use directory or content path incase
//server is hosted on another cloud 
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})



//add a post method that handles any post that comes in our home route
app.post("/", function(req, res){
    //create a var for each input with name num1 and num2
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height =  parseFloat(req.body.height);
    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
})

//create our server
app.listen(3000, function(){
    console.log("Server at port 3000 is live");
})


