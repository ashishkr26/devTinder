const express = require("express");

//creating new application of express
const app = express();



//response from server using route
app.use("/test",(req, res)=>{
    res.send("hello from server using route now i am using nodemon.!!!");
});
//response from server
app.use((req, res)=>{
    res.send("hello from server.!!!");
});





app.listen(3000, ()=>{
    console.log("Server is successfully running on port 3000");
});