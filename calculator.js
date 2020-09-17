const express= require('express');
const app= express();
const bodyparser= require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/bmi', function(req,res){
    res.sendFile(__dirname+ "/bmi.html");
    });

app.post('/', function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    
    var result= num1+num2;

    res.send("the result is "+ result);
});

app.listen(4000,function(){
    console.log("server running on 4000");
});



app.post('/bmi', function(req,res){
var h=parseFloat(req.body.height);
var w=parseFloat(req.body.weight);
var b=w/(h*h);
res.send("<h1> your bmi is </h1>"+ b);
});