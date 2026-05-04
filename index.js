const http = require('http');
const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/plain'})
    }

})

server.listen(5000,() => {
    console.log("Server is running 5000")
})