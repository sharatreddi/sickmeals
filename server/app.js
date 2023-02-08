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

app.get("/get", (req, res)=>{
    const sql = "SELECT * from diseases where name ='"+disease_name+"';";
    db.query(sql, (err,response)=>{
        res.send(response);
        console.log(disease_name)
    })
})

app.post("/insert", (req, res) => {
    const disname = req.body.diseasename;
    disease_name = disname;
    console.log(disname);
    // // res.send("Hello");
    const sql = "SELECT * from diseases where name ='"+disname+"';"
    db.query(sql,(err, result)=>{
      console.log(result);
      res.send(result);
    //   console.log(disname);
    })
 })

 app.listen(3001, ()=>{
    console.log("Running on port 3001");
 })