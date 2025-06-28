import express from 'express'
const app = express();

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/add-user',(req,resp)=>{
    resp.render('addUser')
});

app.post('/submit-user',(req,resp)=>{
    console.log(req.body);
    
resp.render('SubmitUser',req.body)
});

app.get("/users",(req,resp)=>{
    const users=['anil','sidhu','sam','peter','bruce']
    resp.render("users",{users:users,isLogin:false});
})


app.listen(3200)

