// B1: Include thư viện http
const http = require('http');
// B2: Khởi tạo server
const server = http.createServer((request, response) => {
    console.log(request.url);
});
// B3: Lắng nghe cổng thực thi
const port = 3001;
server.listen(port, () => {
    console.log(`Server is runing on ${port}` )
})