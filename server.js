const express=require('express')
const app=express()

app.get("/",(req,resp)=>{
     resp.sendFile('public/index1.html',{root:__dirname});

});

app.listen(8080)
console.log("server is running at port 8080");