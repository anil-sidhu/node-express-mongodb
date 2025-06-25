import express from 'express'
const app = express();

app.get("/",(req,resp)=>{
resp.send("Home Page")
});

app.get("/users",(req,resp)=>{
resp.send("Users Page")
});


app.get("/error",(req,resp,next)=>{
const error= new Error('')
error.status=404;
next(error)
});



app.use((error, req,resp,next)=>{
   resp.status(error.status || 500).send("Try after some time")
})

app.listen(3200)