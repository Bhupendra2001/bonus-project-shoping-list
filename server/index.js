const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/router')
const app = express()

app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://bhupendra_:1B97GiRnjBfdXTL4@cluster5.fjlkdvr.mongodb.net/shoping-list", { useNewUrlParser: true })
 .then(()=> console.log("MongoDb connected"))
 .catch((error)=>console.log(error))

app.use('/', route)


app.use(function(req,res){
    res.status(404).send({status:false,message:"incorrect url"})
})


app.listen(3001,function(){
    console.log("express running on port 3001")
 })


