const express = require("express");
const cors = require("cors");
const app=express();
const mongoose= require("mongoose");
const Connectdb= require("./Connectdb");
const branchModel = require("./Model/Branchmodel");
const newUser = require("./Model/newUser");

app.use(express.json());
app.use(cors());

app.get("/bank", async (req,res)=>{
    Connectdb();
    const result= await branchModel.find({});
    res.send(result);

});
app.get("/User", async (req,res)=>{
    Connectdb();
    const result= await newUser.find({});
    res.send(result);

});

app.post("/addbranch", (req,res)=>{
    Connectdb();
    const newBranch= new branchModel(req.body);
    newBranch.save();
    res.send("new branch added succesfully")
});

app.post("/createAcc", (req,res)=>{
    Connectdb();
    const newCus= new newUser(req.body);
    newCus.save();
    res.send("new user added succesfully")
});

 app.listen(4040,()=>{
    console.log(`Connected to server 4040`)});