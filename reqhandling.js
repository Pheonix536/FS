const http = require('http');
const url = require('url');
const PORT = 5000;
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url==='/'){
        res.statusCode=200;
        res.write("<h1>Home Page</h1>");
        res.write("Welcome to Node.js Routing Example</p>");
    }else if(req.url==='/about'){
        res.statusCode=200;
        res.write("<h1>About Page</h1>");
        res.write("This is the about page of our Node.js Routing Example</p>");
    }else if(req.url==='/contact'){
        res.statusCode=200;
        res.write("<h1>Contact Page</h1>");
        res.write("This is the contact page of our Node.js Routing Example</p>");
    }else{
        res.statusCode=404;
        res.write("<h1>404 Not Found</h1>");
        res.write("The page you are looking for does not exist.</p>");
    }
    res.end();
});

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});