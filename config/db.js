const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/post").then((d)=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})