import express from 'express'
import { MongoClient } from 'mongodb';

const dbName="school"
const url ="mongodb://localhost:27017"
const client= new MongoClient(url)


const app = express();
app.set("view engine",'ejs')
client.connect().then((connection)=>{
    const db =connection.db(dbName);

    app.get("/api",async (req,resp)=>{
        const collection =db.collection("students")
        const students= await collection.find().toArray();
        resp.send(students)
    })
     app.get("/ui",async (req,resp)=>{
        const collection =db.collection("students")
        const students= await collection.find().toArray();
        resp.render('students',{students})
    })
})

// app.set("view engine",'ejs')

app.listen(3200)





