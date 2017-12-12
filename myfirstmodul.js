var http = require('http'),
    fs = require('fs');


fs.readFile('./test.js', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        dt.Motor;
        response.end();  
    }).listen(8000);
});
