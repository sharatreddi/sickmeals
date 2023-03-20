const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); 
const app = express();

var disease_name = "";

const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "admin",
    database : "sickmeals", 
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/get", (req, resp)=>{
    const sql = "SELECT * from diseases where name ='"+disease_name+"';";
    db.query(sql, (err,response)=>{
        if(err){
            console.error(err);
            resp.status(500).send("Error fetching data from the database");
        }else{
            const data = JSON.stringify(response);
             resp.send(data);
        }
        // res.send(response); /*<-here lies the problem*/
        // console.log(disease_name)
    })
    // console.log(disease_name);
})

//This is happening (tick)-------------------------
app.post("/insert", (req, res) => {
    const disname = req.body.diseasename;
    disease_name = disname;
    // console.log(disease_name);/*<-this showin "disease name"*/
    // // res.send("Hello");
    const sql = "SELECT * from diseases where name ='"+disname+"';"
    db.query(sql,(err, result)=>{
       console.log(result); 
      res.send(result); //<-this result is working fine
    //   console.log(disname);
    })
 })
 //This is happening (tick)-------------------------


 app.listen(3001, ()=>{
    console.log("Running on port 3001");
 })