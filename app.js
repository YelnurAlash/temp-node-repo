const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome!');
    }
    if (req.url === '/about') {
        res.end('Another page');
    }
    res.end(`<h1>Error page!<h1>
            <a href="/">back home</a>`);
});

server.listen(5000);