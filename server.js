// Server wird über die Kommandozeile gestartet
// $ node server.js  

var net = require("net");

var tcpServer = net.createServer();

var datas = [];

var sockets = [];

tcpServer.on('connection', function(socket){
	console.log('connection established');
	
    sockets.push(socket);
    
	socket.setEncoding('utf8');

	socket.on('data', function(data){
        
        console.log(data);
    
        if (data.startsWith('get') == true) {
            socket.write(datas[datas.length - 1]);
        } else {
            datas.push(data);
        }
        
//        console.log(datas);
//        console.log(datas.length);
    
	});

});

tcpServer.listen(3333, '127.0.0.1');

