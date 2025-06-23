import express from 'express'
const app = express();


function checkAgeRouteMiddleware(req,resp,next){
    console.log(req.query.age);
    
    if(!req.query.age || req.query.age<18 ){
        resp.send("You are not allowed to used this website")
    }else{
        next()
    }
}

function checkURLRouteMiddleware(req,resp,next){
    console.log("this request url is ", req.url);

   next()
}

app.get('',(req,resp)=>{
    resp.send("<h1>Home Page<h1>")
})

app.get('/login',checkURLRouteMiddleware,(req,resp)=>{
    resp.send("<h1>Login Page<h1>")
})

app.get('/users',checkAgeRouteMiddleware,checkURLRouteMiddleware,(req,resp)=>{
    resp.send("<h1>User Page<h1>")
})

app.get('/products',checkAgeRouteMiddleware,checkURLRouteMiddleware,(req,resp)=>{
    resp.send("<h1>Products Page<h1>")
})

app.listen(3200)