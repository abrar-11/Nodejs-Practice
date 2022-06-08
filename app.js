const http = require("http");
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<h1>Home Page</h1>");
        res.end();
    } else if (req.url == "/about") {
        res.write("<h1>About Page</h1>");
        res.end();
    } else if (req.url == "/contact") {
        res.write("<h1>Contact Page</h1>");
        res.end();
    } else {
        // set status code to 404
        res.statusCode = 404;
        res.write("<h1>404 | Page not found</h1>");
        res.end();
    }
});

server.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
