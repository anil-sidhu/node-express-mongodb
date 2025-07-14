import mongoose from 'mongoose'
import express from 'express'
import studentModel from './model/studentModel.js';

const app = express();

 app.use(express.json());
 await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("_______connected______");
 })


app.get("/",async (req,resp)=>{
    const studentData= await studentModel
    resp.send(studentData)
})

app.post("/save",async (req,resp)=>{
    console.log(req.body);
    const {name,age,email}= req.body;
if(!req.body || !name || !age || !email){
  resp.send({
        message:"data not stored",
        success:false,
        storedInfo:null
    })  
    return false
}
    const studentData = await studentModel.create(req.body)
    
    resp.send({
        message:"data stored",
        success:true,
        storedInfo:studentData
    })

})

app.listen(3200)

// async function dbConnection(){
//    await mongoose.connect("mongodb://localhost:27017/school");
//    const schema= mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number,
//    })

//    const studentsModel = mongoose.model('students',schema);
//    const result = await studentsModel.find();
//    console.log(result);
   

// }

// dbConnection();