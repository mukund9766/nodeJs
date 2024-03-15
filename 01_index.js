const express = require('express');

const app = express();
app.get('', (req, resp)=>{
    resp.send('Hello this is home page')
});

app.get('/about',(req,resp)=>{
    resp.send("Hello, this is about page")
});

app.listen(4000);




// Use of imported package 

// const colors = require('colors')
// console.log("hello".red)



// // filter function in nodeJs

// const arr = [1,3,4,56,6,4,4,56,4,5]
// let res = arr.filter((i)=>{
//     return i>4
// })
// console.log(res) 