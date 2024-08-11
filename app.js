const express=require("express");
const app=express();
const port=8000;
const databse=require("./config/db")
const cors=require("cors");
const blogmodel=require("./model/blogmodel")


app.use(express.json());
app.use(cors())
// add post
app.post("/post",(req,res)=>{
    try{
         const {title,photo,description}=req.body;
              const addblog=new blogmodel({
                title,photo,description
              });
              addblog.save();
              res.send({
                message:"data added"
              })

    }catch(err){
        console.log(err)
    }
})

// blog data
app.get("/blog",async(req,res)=>{
    try{
        const blogdata=await blogmodel.find();
        res.send({
            message:"ok",
            blogdata
        })
    }catch(err){
        console.log(err)
    }
})
// blog delete
app.delete("/blog/:id",async(req,res)=>{
    try{
           const id=req.params.id;
           const blogdata=await blogmodel.find();
       await blogmodel.findByIdAndDelete({_id:id});
        res.send({
            message:"ok",
            blogdata
        })
    }catch(err){
        console.log(err)
    }
})
// get data by id
app.get("/blog-data/:id",async(req,res)=>{
    try{
      const id=req.params.id;
     const finddata=await blogmodel.findOne({_id:id});
     res.send({
        message:"ok",
        blogdata:finddata
     })

    }catch(err){
        console.log(err)
    }
})

// update blog
app.put("/update/:id",async(req,res)=>{
    try{
      const id=req.params.id;
      const {title,photo,description}=req.body;
     await blogmodel.findByIdAndUpdate({_id:id},{
        $set:{
          title,
          photo,
          description
        }
      })
    }catch(err){
        console.log(err)
    }
})


app.listen(port)