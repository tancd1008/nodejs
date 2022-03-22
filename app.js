// B1: Include thư viện http
import express from "express";
import mongoose from "mongoose";
import homeRouter from "./routers/home";
import productRouter from "./routers/product"
import newRouter from "./routers/new"
const app = express();


app.use(express.json());
app.use(homeRouter);
app.use('/api',productRouter);
app.use(newRouter)
mongoose.connect('mongodb://127.0.0.1:27017/we16307');

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
app.listen(port, () => {
    console.log(`Server is runing on ${port}` )
})