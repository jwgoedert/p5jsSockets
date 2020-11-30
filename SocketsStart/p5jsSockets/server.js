const http = require('http');
const path = require('path');
const fs = require('fs');

let handleRequest = function (request, response) {
    fs.readFile(__dirname + '/index.html', 
    //Callback funtion for reading
        function(err, data){
            if(err){
                response.writeHead(500);
                return response.end('Error loading index.html');    
            }
            response.writeHead(200);
            response.end(data);
        }
    );
};

let server = http.createServer(handleRequest);

server.listen(8080);

console.log('Server started on port 8080');
