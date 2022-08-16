const express = require("express");
const cors = require("cors");
const app=express();
const mongoose= require("mongoose");
const Connectdb= require("./Connectdb");
const branchModel = require("./Model/Branchmodel");
const newUser = require("./Model/newUser");
const benefModel= require("./Model/benefModel")

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
app.get("/User", async (req,res)=>{
    Connectdb();
    const result= await newUser.find({});
    res.send(result);

});

app.post("/createAcc", (req,res)=>{
    Connectdb();
    const newCus= new newUser(req.body);
    newCus.save();
    res.send("new user added succesfully")
});
app.get("/Trans", async (req,res)=>{
    Connectdb();
    const result= await newtransaction.find({});
    res.send(result); 

});
app.post("/showTransaction", (req,res)=>{
    Connectdb();
    const newTrans= new newtransaction(req.body);
    newTrans.save();
    res.send("Transaction succesfull")
});
app.get("/benef", async (req,res)=>{
    Connectdb();
    const result= await benefModel.find({});
    res.send(result); 
    
});
app.post("/addBenef", (req,res)=>{
    Connectdb();
    const newBenef= new benefModel(req.body);
    newBenef.save();
    res.send("Beneficiary added succesfully")
});

 app.listen(4040,()=>{
    console.log(`Connected to server 4040`)});