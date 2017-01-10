// Client wird über die Kommandozeile gestartet
// $ node client.js -a <ip:port> -p <value>

var ipPort = process.argv[3].split(':');
var ip = ipPort[0];
var ipString = ip.toString();
var port = ipPort[1];
var arrayLength = process.argv.length;
var value = [];
for (var i = 6; i < arrayLength; i++) {
            value.push(process.argv[i]);        
        } 
var valueString = value.toString();

if (process.argv[2] == '-a') {
    
    var net = require('net');
    
    
    var client = new net.Socket();  
    client.connect(port, ipString, function() {
        console.log('Connected');
    });
    
    if (process.argv[4]) {
        client.write(valueString);
    } else {
            client.write('get');
        }

    client.on('data', function(data) {
        console.log('Received: ' + data);
        client.destroy(); 
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
    
} else {
    console.log('Gib ip und port des Servers an, mit dem du dich verbinden möchtest');
}
    