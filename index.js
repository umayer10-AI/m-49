const http = require('http');
const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/plain'})
        res.end("hello from node Umayer")
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type' : 'text/plain'})
        res.end("About US hello from Umayer")
    }

})

server.listen(5000,() => {
    console.log("Server is running 5000")
})