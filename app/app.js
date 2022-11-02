const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`API pronta para uso na porta: ${port}`);
})
app.get ("/", (req,res,next)=>{
    res.json({title:"API em node.js"});
})