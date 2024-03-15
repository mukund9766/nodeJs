const mysql = require("mysql");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "nodejs"
});

con.connect((err)=>{
    if(err){
        console.warn(err)
    }
    else{
        console.warn("connected")
    }
});

con.query("select * from 01_data",(err,result)=>{
    console.warn("result",result)
})