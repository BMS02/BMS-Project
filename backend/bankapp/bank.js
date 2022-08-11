const express = require("express");
const cors = require("cors");
const app=express();
const mongoose= require("mongoose");
const Connectdb= require("./Connectdb");
const branchModel = require("./Model/Branchmodel");

app.use(express.json());
app.use(cors());

app.get("/bank", async (req,res)=>{
    Connectdb();
    const result= await branchModel.find({});
    res.send(result);

});

app.post("/addbranch", (req,res)=>{
    Connectdb();
    const newBranch= new branchModel(req.body);
    newBranch.save();
    res.send("new branch added succesfully")
});
 app.listen(4040,()=>{
    console.log(`Connected to server 4040`)});