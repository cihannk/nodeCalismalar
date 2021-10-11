const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
    const url = ctx.url;

    if(url === "/"){
        ctx.body = "<h1>Index sayfasina hosgeldiniz</h1>";
    }
    else if (url === "/hakkimda"){
        ctx.body = "<h1>Hakkımda sayfasina hosgeldiniz</h1>";
    }
    else if (url === "/iletisim"){
        ctx.body = "<h1>Iletisim sayfasina hosgeldiniz</h1>";
    }
    else{
        ctx.body = "<h1>Sayfa Bulunamadi</h1>";
    }
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Sunucu ${port}. portdan başlatıldı`)
});
