// // middleware are the fuctions are used with routes using middleware we can access request and response and modify them according our use
// use of middleware example 
// - website authentication
// - user is login or not
// - access user age and based on age provide access of website

const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide age")
    }
    else if(req.query.age<18){
        resp.send("You are not access of this page")
    }
    else{
        next()
    }
    
}

app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send("welcome to homepage")
    
})

app.get('/about',(req,resp)=>{
    resp.send("welcome to about page")

})

app.listen(5000)