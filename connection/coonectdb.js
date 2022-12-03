// connection of database
let mongoose = require('mongoose')
let URI = "mongodb+srv://Anoushka:12345@bloggerdb.wdnosrl.mongodb.net/?retryWrites=true&w=majority"

let
connectdb = async()=>{
try{
let con = mongoose.connect(URI,{useUnifiedTopology :true, useNewUrlParser: true})
  console.log("database is connected with the given URI ")
}

catch(err){
console.log(err)
}}
module.exports = connectdb
