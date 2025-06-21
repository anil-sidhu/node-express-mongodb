import express from 'express'
import path from 'path'
const app = express();

app.get("/",(res,resp)=>{
    const absPath= path.resolve('view/home.html')
    resp.sendFile(absPath)
})
app.get("/login",(res,resp)=>{
    const absPath= path.resolve('view/login.html')
    resp.sendFile(absPath)
})

app.get("/about",(res,resp)=>{
    const absPath= path.resolve('view/about.html')
    resp.sendFile(absPath)
})


app.listen(3200)