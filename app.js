const { SerialPort } = require('serialport');
const serialport = new SerialPort({
  path: 'COM1',
  baudRate: 9600,
});

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/node_modules/createjs-soundjs/lib'));
app.use(express.static(__dirname + '/sfx'));

io.on('connection', function(socket)
{
	console.log("It's ASMR time, baby!");
});

http.listen(8080, function()
{
	console.log('Hey! Open localhost:8080 in your web browser!');
});

var intensity = 0;

serialport.on('open', function()
{
	serialport.on('data', function(data)
	{
		intensity = 1023 - data;
		io.emit('update', intensity);
	});
});
