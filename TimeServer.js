const net = require('net');

function makeTime()
{
    let date = new Date();

    let year = date.getFullYear();
    
    let month = date.getMonth();
    month = ++month < 10 ? "0" + month : month;

    let day = date.getDate();
    day = day < 10 ? "0" + day : day;

    let time = date.getHours() + ":" + date.getMinutes();

    return `${year}-${month}-${day} ${time}\n`;
}

let port = process.argv[2];

let server = net.createServer( (socket) => {
    socket.end(makeTime());
});

server.listen(port);