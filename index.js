import express from 'express'
import cors from 'cors'
const app= express();

app.use(cors());
app.get("/",(req,resp)=>{
    resp.send({
        name:"anil",
        age:29,
        email:"anil@test.com"
    }) 
})

app.listen(3200)