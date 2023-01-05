const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("public" + req.url, (err, data) => {
    if (err) {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Page not fount, 404</h1>");
      return res.end();
    }
    // console.log(data.toString());
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data.toString());
    res.end();
  });
});

server.listen(3002);
