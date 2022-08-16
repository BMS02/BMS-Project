const mongoose = require("mongoose");
const newTransaction = mongoose.model("transactions", {
  accholder:{type: String},
 accno :{type: String},
  AccBal:{type: Number},
});
module.exports = newTransaction;



