import express from 'express'
import mongoose from 'mongoose'
const app = express()
let port = process.env.PORT || '300'
app.use(express.urlencoded({extended:true}))
// Connection to mongodb
mongoose.connect('mongodb://0.0.0.0:27017/StudentData').then((console.log("COnnection Successfully"))).catch((err)=>{
    console.log(err)
})

// Creating Schema
const studentschema = new mongoose.Schema({
   name:String ,
   email:String,
   feed:String
})
// Creating Model

const studentmodel = new mongoose.model('students',studentschema)
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile('C:\\Users\\Nitesh\\Desktop\\Feedback_form2\\public\\index.html');
})

app.post('/feedback_form',(req,res)=>{
const {name,email,feed} = req.body
studentmodel.create({name,email,feed});
res.redirect('/')
})
app.listen(port,()=>{
    console.log(`Server is Running at https://localhost:${port}`)
})

