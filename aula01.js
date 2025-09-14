// Primeira aplicação

const http = require("http");

requestListener = function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Hello World</h2>");
}

server = http.createServer(requestListener);
server.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');