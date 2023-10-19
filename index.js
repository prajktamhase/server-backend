import express from "express";

//middle ware
const app=express();

app.use(express.json());

const PORT=5000;

const students=[];

// server is start or not check use for health (end point) API
app.get('/health',(req,res)=>{
    res.json({status:'All the best'});

});

app.get('/student',(req,res)=>{
    res.json({
        success:true,
        data:students,
        message:'successfully fetched all student',   
    });
     })

     app.post('/students',(req,res)=>{
        const{name,age,mobile,email}=req.body;
     })
app.listen(PORT,()=>{
    console.log(`Server is running${PORT}.`);
})