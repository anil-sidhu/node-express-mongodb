import express from 'express'
import path from 'path'

const app = express();


app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get("/",(req,resp)=>{
    const filePath= path.resolve('view/home.html');
    resp.sendFile(filePath)
})


app.get("/login",(req,resp)=>{
    resp.send(`
        <form action="/submit" method="post">
       <input type="text" placeholder="enter email" name="email" />
        <input type="text" placeholder="enter password" name="password" />
        <button>Login</button>
        </form>
        `)
})


app.post("/submit",(req,resp)=>{
    console.log("user login details are : ",req.body);
    
    resp.send("submit Page")
})


app.get("/users",(req,resp)=>{
    resp.send("User Page")
})

app.listen(3200)
