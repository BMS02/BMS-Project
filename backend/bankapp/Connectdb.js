const mongoose= require("mongoose");

const Connectdb=()=>{
    const db="mongodb://localhost/bank";
    mongoose
    .connect(db).then(()=> console.log(`Connected to ${db}`))
    .catch((err)=> console.log(err));


};

module.exports= Connectdb;