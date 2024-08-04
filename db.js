const mongoose = require('mongoose')

const url = "mongodb+srv://bhanuchiluka234:Bhanu123@cluster0.s4vqeiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then(()=>console.log("DB CONNECTED"))
.catch((error)=>console.log(error.message))

module.exports =  mongoose