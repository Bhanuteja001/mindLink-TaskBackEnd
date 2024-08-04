const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/tasks"

mongoose.connect(url)
.then(()=>console.log("DB CONNECTED"))
.catch((error)=>console.log(error.message))

module.exports =  mongoose