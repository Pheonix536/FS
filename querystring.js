const http=require('http');
const url=require('url');
const PORT=4000;
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const query=parsedUrl.query;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h2>Query String Values:</h2>');
    res.write('<p><b>Name:</b> '+query.name+'</p>');
    res.write('<p><b>Age:</b> '+query.age+'</p>');
    res.write('<p><b>Department:</b> '+query.department+'</p>');
    res.end();
});
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});