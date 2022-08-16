const mongoose= require("mongoose");

const Benef= mongoose.model("benefs",{
   accno :{type: String},
      bankname:{type: String},
      branchname: {type: String},
      amnt:{type:Number},
      bname: {type: String},
      
});

module.exports = branchModel;
