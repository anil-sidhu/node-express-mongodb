import express from 'express'
import session from 'express-session';

const app = express();

app.set("view engine", 'ejs')

app.use(session({
    secret:'apple',
}))


app.use(express.urlencoded({ extended: true }))


app.get("/login", (req, resp) => {
    resp.render('login')
})

app.post("/profile",(req,reps)=>{
    req.session.data= req.body;
    console.log(req.session.data);
    
    reps.render('profile')
})

app.get("/",(req,resp)=>{
    const data = req.session.data;
    console.log("data",data);
    
    resp.render("home",{data})
})




app.listen(3200)