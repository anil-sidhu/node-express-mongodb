const express = require('express');
const app = express();

// const express = require('express')();

app.get("",(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})


app.get("/about",(req,resp)=>{
    resp.send("<h1>About Page</h1>")
})


app.listen(3400)



