const http = require("http");

const server = http.createServer((req,resp)=>{
    //console.log(req);
    if(req.url=="/"){
        resp.write("<h1>Bienvenue dans notre premier http response by nodeJS API</h1>");
    }
    else if(req.url==="/home"){
        console.log("--------");
        resp.write("<h1> thi is the home page</h1>");
    }
    else{
        console.log(req.url);
        resp.write(`<h1>Il existe une erreur d'url : </h1>
            <ul>
                <li>Ressources Not Found</li>
                <li>Erreur 404</li>
                <li><a href="/home">Go Home</li>
            </ul>
        `);
    }
    resp.end();
});

server.listen(5000);
//j'execute node modelHTTP.js puis j'execute dans le browser localhost:5000/home par exemple