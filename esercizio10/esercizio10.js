import 'express-async-errors'
const express = require("express");
const app = express();
const planets = require("./database")


app.use(express.json());

app.get("/api/planets",(res,req)=>{
    res.status(200).json
})

app.listen(3000)