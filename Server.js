//jshint esversion:6
const express=require("express");
const app=express();
//reply of the server to the request
app.get("/",function(request,response){
  response.send("Hello ! Ayush ");
});



//request made to the server localhost:3000
app.listen(3000,function(){
  console.log("Server started on port 3000");

});
