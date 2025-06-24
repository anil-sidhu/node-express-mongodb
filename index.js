import express from 'express'
const app = express();


function checkAgeRouteMiddleware(req, resp, next) {
    if (!req.query.age || req.query.age < 18) {
        resp.send("You are not allowed to used this website")
    } else {
        next()
    }
}

app.use(checkAgeRouteMiddleware)

app.get('', (req, resp) => {
    resp.send("<h1>Home Page<h1>")
})

app.get('/login', (req, resp) => {
    resp.send("<h1>Login Page<h1>")
})

app.get('/users', checkAgeRouteMiddleware, (req, resp) => {
    resp.send("<h1>User Page<h1>")
})

app.get('/products', checkAgeRouteMiddleware, (req, resp) => {
    resp.send("<h1>Products Page<h1>")
})

app.listen(3200)