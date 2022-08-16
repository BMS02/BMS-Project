const mongoose= require("mongoose");

const benefModel= mongoose.model("benficiaries",{
   accno :{type: String},
      bankname:{type: String},
      branchname: {type: String},
      amnt:{type:Number},
      bname: {type: String},
      
});

module.exports = benefModel;
