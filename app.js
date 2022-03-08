// B1: Include thư viện http
const http = require('http');
// B2: Khởi tạo server
const server = http.createServer((request, response) => {
    console.log(request.url);
    if(request.url === "/"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Home Page</h1>");
        response.end();
    }
    if(request.url === "/products"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Product Page</h1>");
        response.end();
    }
    if(request.url === "/news"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>New Page</h1>");
        response.end();
    }
});
// B3: Lắng nghe cổng thực thi
const port = 3001;
server.listen(port, () => {
    console.log(`Server is runing on ${port}` )
})