import express from 'express'
import path from 'path'
import { MongoClient, ObjectId } from 'mongodb';
import { title } from 'process';
import serverless from "serverless-http";


const app = express();
const publicPath = path.resolve('public')
app.use(express.static(publicPath));
app.set("view engine", 'ejs')

const dbName = "node-project";
const collectionName = "todo"
// const url = "mongodb://localhost:27017"

const url = "mongodb+srv://webanilsidhu:12345@cluster0.dqwwk5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url)

let cachedClient = null;
let cachedDb = null;

const connection = async () => {
   if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(url);
  cachedClient = client;
  cachedDb = client.db(dbName);
  return cachedDb;
}


app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, resp) => {
    const db = await connection();
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    
    resp.render("list",{result})
})

app.get("/add", (req, resp) => {
    resp.render("add")
})

app.get("/update", (req, resp) => {
    resp.render("update")
})

app.post("/update", (req, resp) => {
    resp.redirect("/")
})

app.post("/add", async (req, resp) => {
    const db = await connection();
    const collection = db.collection(collectionName);
    const result = collection.insertOne(req.body)
    if (result) {
        resp.redirect("/")
    } else {
        resp.redirect("/add")
    }

})

app.get("/delete/:id", async (req, resp) => {
    const db = await connection();
    const collection = db.collection(collectionName);
    const result = collection.deleteOne({_id:new ObjectId(req.params.id)})
    if (result) {
        resp.redirect("/")
    } else {
        resp.send("/some error")
    }

})

app.get("/update/:id", async (req, resp) => {
    const db = await connection();
    const collection = db.collection(collectionName);
    const result = await collection.findOne({_id:new ObjectId(req.params.id)})
    console.log(result);
    
    if (result) {
        resp.render("update",{result})
    } else {
        resp.send("some error")
    }

})

app.post("/update/:id", async (req, resp) => {
    const db = await connection();
    const collection = db.collection(collectionName);
    const filter = {_id:new ObjectId(req.params.id)}
    const updateData={$set:{title:req.body.title,description:req.body.description}}
    const result = await collection.updateOne(filter,updateData)
    if (result) {
        resp.redirect("/")
    } else {
        resp.send("some error")
    }

})

app.post("/multi-delete",async (req, resp) => {
    const db = await connection();
    const collection = db.collection(collectionName);
console.log(req.body.selectedTask);

let selectedTask=undefined
if(Array.isArray(req.body.selectedTask)){
 selectedTask= req.body.selectedTask.map((id)=> new ObjectId(id))

}else{
 selectedTask= [new ObjectId(req.body.selectedTask)]

}
console.log(selectedTask);
const result = await collection.deleteMany({_id:{$in:selectedTask}})

    if (result) {
        resp.redirect("/")
    } else {
        resp.send("some error")
    }
})


// app.listen(3300)

export default serverless(app);
