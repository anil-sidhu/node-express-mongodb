import express from 'express'

const app = express();


app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))
app.get("/login",(req,resp)=>{
resp.render('login')
})


app.post("/profile",(req,resp)=>{
    resp.setHeader('Set-Cookie',"login=true")
    resp.setHeader('Set-Cookie',"name="+req.body.name)

resp.render('profile')
})

app.get("/",(req,resp)=>{
    let  cookiesData= req.get('cookie');

    cookiesData= cookiesData.split(";")

    cookiesData= cookiesData[1].split("=");

    console.log(cookiesData[1]);
    
resp.render('home',{name:cookiesData[1]})
})

app.listen(3200)