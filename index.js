import express from 'express'
import nodemailer from 'nodemailer'

const app = express();


const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'webanilsidhu@gmail.com',
        pass:'gwos xlen vqid jwqx'
    }
});

// app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs')
app.get("/mail",(req,resp)=>{
    resp.render("mail")

})

app.post("/submit-email",(req,resp)=>{
    console.log(req.body);
    
    const mailOptions={
        from :'webanilsidhu@gmail.com',
        to:'webanilsidhu@gmail.com',
        subject:req.body.subject,
        text:req.body.mail
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            req.send("email operation failed, try again")
        }else{
            resp.send("mail send")
        }
    })
    
    resp.send("email send")

})

app.listen(3200)