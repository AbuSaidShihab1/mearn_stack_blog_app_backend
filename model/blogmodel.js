const mongoose=require("mongoose");

const blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});

const blogmodel=mongoose.model("Blog",blogschema);

module.exports=blogmodel;