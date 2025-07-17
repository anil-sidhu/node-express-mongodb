import { MongoClient } from "mongodb";

const url="mongodb+srv://webanilsidhu:GoogleTest@cluster0.dqwwk5n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const database="school";
const collection="student";
const client= new MongoClient(url);
client.connect().then(()=>{
    console.log(".......connect..........");
    
})

async function dbConnection(){
   const db= client.db(database)
   const collectResult = db.collection(collection);
   const result = await collectResult.find().toArray();
   console.log(result);
   
}

dbConnection()