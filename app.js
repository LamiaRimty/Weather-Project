const express = require("express");
const app = express();
const https=require("https");


app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=Delft&appid=629f0c4e6dea1615eab7d478100e7a35&units=metric";
    
    https.get(url,function(response){  //callback func give us back response.
    
        console.log(response.statusCode);
        response.on("data",function(data){  //when we rev data & callback that data
        const weatherData= JSON.parse(data); //data hex turn to js
        const temp= weatherData.main.feels_like;
        const des= weatherData.weather[0].description;//item hold byb 0 cos only 1item of weather
            console.log(temp);
            console.log(des);
    })
    }); 
    res.send("Server is up and running");
}); //user go to homepage



app.listen(3000,function(){
 console.log("Server is running on port 3000 ");
});