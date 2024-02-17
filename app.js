const express=require("express");
const app=express();
const parser=require("body-parser");
const sql=require("./db");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static("public"));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.htm");
})
app.post("/",function(req,res){
    
    var name=req.body.name;
    var id=req.body.studentid;
    var email=req.body.email;
    var number=req.body.phone;
    var address=req.body.address;
    var doc=req.body.documentation;
    var skills=req.body.skills;
    var sub=req.body.submissiondate;


    //sql part
    var query="INSERT INTO details(name,id,email,number,address,doc,skills,sub) VALUES(?,?,?,?,?,?,?,?)";
    sql.query(query,[name,id,email,number,address,doc,skills,sub],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
    
 });
 
    








app.listen("7000",function(){
    console.log("server is connected");
})