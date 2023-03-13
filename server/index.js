const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database:'securityscan'
});

app.post('/create' , (req,res)=>{

      const Reponame=req.body.Reponame
      const Status=req.body.Status
      const QueuedAt=req.body.QueuedAt
      const ScanningAt =req.body.ScanningAt
      const FinishedAt =req.body.FinishedAt
      const Ruleid =req.body.Ruleid
      const Descriptions =req.body.Descriptions
      const Severity =req.body.Severity
      const Pathname =req.body.Pathname

    db.query(
      "insert into scanlist(Reponame,Status,QueuedAt,ScanningAt,FinishedAt,Ruleid,Descriptions,Severity,Pathname) values ( ?,?,?,?,?,?,?,?,?);",
               [Reponame,Status,QueuedAt ,ScanningAt,FinishedAt ,Ruleid,Descriptions,Severity ,Pathname ],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send("Added the values");
            }
        }
    );
});

app.get('/getdata',(req,res)=>{
db.query("SELECT * FROM scanlist", (err,result)=>{
    if(err){
        console.log(err)
    }else{
        res.send(result);
    }
})
});



app.get('/findingdata',(req,res)=>{
  db.query("SELECT {Id} FROM scanlist", (err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result);
      }
  })
  });


app.listen(8080, ()=>{
    console.log("working");
});
