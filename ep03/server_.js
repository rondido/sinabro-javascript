import http from "http";
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  console.log("req", {
    url: req.url,
    method: req.method,
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello");
});

server.listen(port, hostname, () => {
  console.log("host");
});

//common js vs es module
