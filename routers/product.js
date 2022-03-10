const express = require("express");
const route = express.Router();
route.get("/products",(request,respon)=>{
    respon.send(`
    <h1>Product page </h1>
    `)
})

module.exports = route;