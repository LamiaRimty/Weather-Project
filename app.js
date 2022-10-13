const express = require("express");
const app = express();
const https=require("https");


app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=629f0c4e6dea1615eab7d478100e7a35&units=metric";
    
    https.get(url,function(response){  //callback func give us back response.
    
        console.log(response);
    }); 
    res.send("Server is up and running");
}); //user go to homepage



app.listen(3000,function(){
 console.log("Server is running on port 3000 ");
});