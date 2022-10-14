const { query } = require("express");
const express = require("express");
const app = express();
const https=require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true})); //parsing through the body of the post req


app.get("/",function(req,res){
   res.sendFile(__dirname+ "/index.html"); 
    
}); //user go to homepage

app.post("/",function(req,res){  //to catch post req
  
  const query= req.body.cityName;
    const apiKey="629f0c4e6dea1615eab7d478100e7a35";
    const unit ="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q= "+ query + "&appid=" +apiKey + "&units= "+ unit;
    
    https.get(url,function(response){  //callback func give us back response.
    
        console.log(response.statusCode);
        response.on("data",function(data){  //when we rev data & callback that data
        const weatherData= JSON.parse(data); //data hex turn to js
        const temp= weatherData.main.feels_like;
        const des= weatherData.weather[0].description;//item hold byb 0 cos only 1item of weather
        const icon= weatherData.weather[0].icon;
       
        const imageURL="http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        res.write("<p>The Weather is currently "+des+ " </p>");
         res.write("<h1>The temparature in "+query +" is "+ temp + " degree Celcius </h1>");
         res.write("<img src= "+ imageURL+ " >");
        res.send();
         
    })
    });
    console.log(req.body.cityName);
});

 


app.listen(3000,function(){
 console.log("Server is running on port 3000 ");
});