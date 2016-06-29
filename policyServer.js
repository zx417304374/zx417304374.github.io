/**
 * Created by epsoft on 2016/6/29.
 */
var net = require('net');
var fs = require('fs');

// read crossdomain.xml file
var xmlFile = fs.readFileSync(__dirname +'/crossdomain.xml', 'utf8');
console.log(xmlFile);

// this server runs on 843
var application = net.createServer(function(socket) {

    socket.setEncoding('utf8');

    socket.on('data', function(data) {
        try{
            socket.end(xmlFile, 'utf8');
        }catch(e){

        }
    });

    socket.on('end', function() {
        socket.end();
    });

    socket.on('error', function(err) {
        if (socket) {
            socket.end();
            socket.destroy();
        }
    });

}).listen(843);