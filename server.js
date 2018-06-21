const express = require('express');

var path = require("path");

var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    font = 100
    io.on('connection', function (socket) { 
    socket.emit('font_size', { msg: font });
    })
    res.render("index");
})

const server = app.listen(1337);
const io = require('socket.io')(server);
var count = 0
var font = 100
io.on('connection', function (socket) { 
    
    socket.emit('count', { msg: count }); 

    socket.on('form', function () { 
        count += 1
    socket.emit('new_count', { msg: count }); 
    })
    socket.on('form2', function () { 
        count = 0
    socket.emit('new_count', { msg: count }); 
    })
    socket.on('form3', function () { 
        font += 2
    socket.emit('font_size', { msg: font }); 
    })
    socket.on('form4', function () { 
        font -= 2
    socket.emit('font_size', { msg: font }); 
    })
})