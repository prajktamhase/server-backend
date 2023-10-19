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

        if(!name){
            return res.json({
                success:false,
                message:'Name is required',
            })}

            if(!age){
                return res.json({
                    success:false,
                    message:'Age is required',
                })}
                if(!mobile){
                    return res.json({
                        success:false,
                        message:'Mobile is required',
                    })}
                    if(!email){
                        return res.json({
                            success:false,
                            message:'Email is required',
                        })}
        

        const id=math.floor(math.random()*10000)+1;
        const newStudent={
            'name':name,
            'age':age,
            'mobile':mobile,
            'email':email,

        }
        students.push(newStudent);
        res.json({
            success:true,
            data:newStudent,
            message:"successfully added new student",
        })

     })
     
     //find student id
     app.get('/student',(req,res)=>{
        const id=req.query.id;

        let student=null;

        student.forEach((stud)=>{
            if(stud.id==id){
                student=stud;
            }
        })
if(student==null){
    return res.json({
        success:false,
        message:'student not found',
    })
}

        res.json({
            success:true,
            data:student,
            message:'Successfully fetched student',
        })

     })

app.listen(PORT,()=>{
    console.log(`Server is running${PORT}.`);
})