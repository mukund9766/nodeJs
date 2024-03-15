const http = require('http')
const data = require('./data.js')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
