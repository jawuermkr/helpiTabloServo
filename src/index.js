const express = require("express");
const conn = require("express-myconnection");
const mysql = require("mysql2");
const cors = require("cors");
const routeGeneral = require("./routes/general.routes");

const app = express();

const conecction = {
  host: 'localhost',
  user: 'root',
  password: 'Asiste.2021',
  database: 'helpdesk'
};

//middleware
app.use(conn(mysql, conecction, "pool"));
app.use(cors());
// Para evitar instalar body parser y corregir undefined en req.body
app.use(express.json());

app.use("/", routeGeneral)

app.listen(4000, ()=>{
  console.log("Server runing on port", 4000)
})