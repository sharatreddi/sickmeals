const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors"); 
const app = express();

const db = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "admin",
  database : "sickmeals", 
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/get", (req, res) => {
  const disease_name = req.query.disease_name;
  const sql = "SELECT * from diseases where name ='"+disease_name+"';"
  db.query(sql, [disease_name], (err, response) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching data from the database");
    } else {
      res.send(response);
      console.log(disease_name);
    }
  });
});

app.post("/insert", (req, res) => {
  const disname = req.body.diseasename;
  const sql = "SELECT * from diseases where name ='"+disname+"';"
  db.query(sql, [disname], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching data from the database");
    } else {
      res.send(result);
      console.log(result);
    //   console.log(disname);
    }
  });
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const age = req.body.age;
  const phone_no = req.body.phone_no;
  const gmail = req.body.gmail;
  const password = req.body.password;

  const sql = "INSERT INTO profile (username, age, phone_no, gmail, password) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [username, age, phone_no, gmail, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting data into the database");
    } else {
      console.log(result);
      res.send("Data inserted into the database");
    }
  });
});


app.listen(3001, () => {
  console.log("Running on port 3001");
});
