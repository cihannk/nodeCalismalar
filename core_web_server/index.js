const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Ana Sayfaya Hosgeldin!</h2>")
    }
    else if (url === "/hakkimda"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Hakkimda Sayfasina Hosgeldin!</h2>")
    }
    else if(url === "/iletisim"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Iletisim Sayfasina Hosgeldin!</h2>")
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h2>404 Sayfa Bulunamadi</h2>")
    }
    res.end();
})

server.listen(PORT, "localhost", ()=>{
    console.log(`${PORT}. port dinleniyor`);
})