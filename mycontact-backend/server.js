const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/api/contacts",(req,res)=>{
    res.send("Get all contacts");
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})