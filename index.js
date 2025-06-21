import express from 'express'
import home from './pages/home.js';
import login from './pages/login.js';
import submit from './pages/submit.js';

const app = express();

app.get("/",(req,resp)=>{
    resp.send(home());
})
app.get("/login",(req,resp)=>{ 
    resp.send(login());
})
app.post("/submit",(req,resp)=>{
    resp.send(submit());
})

app.listen(3200)