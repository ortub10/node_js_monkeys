// let timer = setInterval(() => {
//   console.log("hello");
// }, 1000);

//-----------------------------------

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello");
  res.end();
});

server.listen(3001);
