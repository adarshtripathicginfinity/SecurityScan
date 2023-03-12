// const express=require('express');
// const app=express();
// const mssql=require('mssql');
// const cors=require('cors');

// app.use(cors());
// app.use(express.json());

// const db=mssql.createConnection({
//     user:'CYBERGINDIA\adarsh.tripathi',
//     password:'',
//     database:'securityscan',
//     server:'CYG612\SQLEXPRESS',
// });

// app.post('/create' , (req,res)=>{
//     const  Id= req.body. Id
//     const RepoName=req.body.RepoName
//     const Status=req.body.Status
//     const QueuedAt=req.body.QueuedAt
//     const ScanningAt =req.body.ScanningAt
//     const FinishedAt =req.body.FinishedAt
//     const Ruleid =req.body.Ruleid
//     const Description =req.body.Description
//     const Severity =req.body.Severity
//     const Pathname =req.body.Pathname

//     db.query(
//         "insert into scanlist(Id,RepoName,Status,QueuedAt,ScanningAt,FinishedAt,Ruleid,Description,Severity,Pathname) values ( ?,?,?,?,?,?,?,?,?,?);",
//         [Id,RepoName,Status,QueuedAt ,ScanningAt,FinishedAt ,Ruleid,Description,Severity ,Pathname ],
//         (err, result)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 res.send("Added the values");
//             }
//         }
//     );
// });

// app.listen(4000, ()=>{
//     console.log("working");
// });

// const sql = require('mssql');

// const config = {
//     server: 'CYG612\SQLEXPRESS',
//     database: 'securityscan',
//     options: {
//         trustedConnection: true
//     }
// };
// sql.connect(config)
//     .then(() => console.log('Connected to MSSQL'))
//     .catch(err => console.error(err));

//     const query = 'SELECT * FROM my_table';

// sql.query(query)
//     .then(result => console.log(result))
//     .catch(err => console.error(err));

//     sql.close();

// const sql = require('mssql');

// const config = {
//     server: 'CYG612\\SQLEXPRESS',
//     database: 'securityscan',
//     options: {
//         trustedConnection: true
//     }
// };

// const connection = new sql.ConnectionPool(config);

// connection.connect()
//     .then(() => {
//         console.log('Connected to MSSQL');
//         const query = 'SELECT * FROM scanlist';
//         return connection.request().query(query);
//     })
//     .then(result => {
//         console.log(result);
//         return connection.close();
//     })
//     .then(() => console.log('Connection closed successfully'))
//     .catch(err => console.error(err));







// var express = require("express");
// var bodyParser = require("body-parser");
// var sql = require("mssql");
// var cors = require("cors");
// var app = express();

// // Body Parser Middleware
// app.use(bodyParser.json());
// app.use(cors());

// //Setting up server
// var server = app.listen(process.env.PORT || 8080, function () {
//   var port = server.address().port;
//   console.log("App now running on port:", port);
// });

// //Initializing connection string
// var dbConfig = {
//   user:  "CYBERGINDIA\adarsh.tripathi",
//   password: "",
//   server: "CYG612\SQLEXPRESS",
//   database: "securityscan",
//   options: {
//     trustedConnection: true,
//   },
// };

// //GET API
// app.get("/api/v1/employee", function (req, res) {
//   getEmployees();
// });
// function getEmployees() {
//   var dbConn = new sql.Connection(dbConfig);
//   dbConn
//     .connect()
//     .then(function () {
//       var request = new sql.Request(dbConn);
//       request
//         .query("select * from scanlist")
//         .then(function (resp) {
//           console.log(resp);
//           dbConn.close();
//         })
//         .catch(function (err) {
//           console.log(err);
//           dbConn.close();
//         });
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// //POST API
// app.post("/api/v1/employee", function (req, res) {
//   insertEmployees();
// });
// function insertEmployees() {
//   var dbConn = new sql.Connection(dbConfig);
//   dbConn.connect().then(function () {
//     var transaction = new sql.Transaction(dbConn);
//     transaction
//       .begin()
//       .then(function () {
//         var request = new sql.Request(transaction);
//         request
//           .query(
//             "INSERT INTO scanlist (RepoName,Status,QueuedAt,ScanningAt,FinishedAt,Ruleid,Description,Severity,Pathname) VALUES (req.body.RepoName,reqreq.body.Status,req.body.QueuedAt,req.body.ScanningAt,req.body.FinishedAt,req.body.Ruleid,req.body.Description,req.body.Severity,req.body.Pathname"
//           )
//           .then(function () {
//             transaction
//               .commit()
//               .then(function (resp) {
//                 console.log(resp);
//                 dbConn.close();
//               })
//               .catch(function (err) {
//                 console.log("Error in Transaction Commit " + err);
//                 dbConn.close();
//               });
//           })
//           .catch(function (err) {
//             console.log("Error in Transaction Begin " + err);
//             dbConn.close();
//           });
//       })
//       .catch(function (err) {
//         console.log(err);
//         dbConn.close();
//       })
//       .catch(function (err) {
//         //12.
//         console.log(err);
//       });
//   });
// }






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
      const Description =req.body.Description
      const Severity =req.body.Severity
      const Pathname =req.body.Pathname

    db.query(
      "insert into scanlist(Reponame,Status,QueuedAt,ScanningAt,FinishedAt,Ruleid,Description,Severity,Pathname) values ( ?,?,?,?,?,?,?,?,?);",
               [Reponame,Status,QueuedAt ,ScanningAt,FinishedAt ,Ruleid,Description,Severity ,Pathname ],
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


app.listen(8080, ()=>{
    console.log("working");
});
