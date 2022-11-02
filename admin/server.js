const express = require("express");
const server = express();
const port = process.env.PORT_ADMIN || 3001;


server.listen(port, ()=>{
    console.log(`aplicação admin pronta para o uso na porta ${port}`);
})

server.get("/", (req,res,next)=>{
    res.send(`aplicação admin em node.js`);
})