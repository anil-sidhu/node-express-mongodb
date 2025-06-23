import express from 'express'
const app = express();


app.use((req,resp,next)=>{
    console.log("user is accessing "+req.url +" Page");
    next(); 
})

app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/users",(req,resp)=>{
    resp.send("users Page")
})

app.get("/products",(req,resp)=>{
    resp.send("products Page")
})

app.listen(3200)