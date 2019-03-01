const http = require("http");
const url = require("url");

let port = Number(process.argv[2]);

let server = http.createServer( (req, res) => {
    let parsedURL = url.parse(req.url, true);
    
    if (parsedURL.pathname === "/api/parsetime")
    {
        let time = new Date(parsedURL.query.iso);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(
            {
                "hour": time.getHours(),
                "minute": time.getMinutes(),
                "second": time.getSeconds()
            }
        ));
    }
    else if (parsedURL.pathname === "/api/unixtime")
    {
        let time = new Date(parsedURL.query.iso);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(
            {
                "unixtime": time.getTime()
            }
        ));
    }
    else
    {
        res.send("Bad request");
    }
    
});

server.listen(port);