const http = require('http')

http.createServer((req,resp)=>{
    resp.write("<h1>Hello this my first server</h1>")
    resp.end()
}).listen(4500)