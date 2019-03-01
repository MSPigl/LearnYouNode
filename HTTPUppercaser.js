const http = require("http");
const map = require("through2-map");

let port = process.argv[2];

let server = http.createServer( (req, res) => {
    if (req.method !== "POST")
    {
        res.send("Bad request");
    }
    else
    {
        req.pipe(map( (chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
});

server.listen(port);