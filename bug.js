const http = require('http');

const server = http.createServer((req, res) => {
  // The following line is the problematic line
  res.end(req.url);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});