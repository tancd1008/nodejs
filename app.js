// B1: Include thư viện http
const http = require('http');
const express = require("express");
const app = express();
const server = http.createServer(app);

const homeRouter = require("./routers/home");
const productRouter = require('./routers/product');
const detailProductRouter = require('./routers/detailProduct');
const newRouter = require('./routers/new');
app.use(homeRouter);
app.use(productRouter);
app.use(newRouter);
app.use(detailProductRouter);
// B2: Khởi tạo server
// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     if(request.url === "/"){
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h1>Home Page</h1>");
//         response.end();
//     }
//     if(request.url === "/products"){
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h1>Product Page</h1>");
//         response.end();
//     }
//     if(request.url === "/news"){
//         response.setHeader("Content-Type", "text/html");
//         response.write("<h1>New Page</h1>");
//         response.end();
//     }
// });
// B3: Lắng nghe cổng thực thi
const port = 3001;
server.listen(port, () => {
    console.log(`Server is runing on ${port}` )
})