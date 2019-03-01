const fs = require("fs");
const http = require("http");

let port = process.argv[2];
let path = process.argv[3];

let server = http.createServer( (req, res) => {
    let fileStream = fs.createReadStream(path);
    fileStream.pipe(res);
});

server.listen(port);