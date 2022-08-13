const mongoose = require("mongoose");
const newUser = mongoose.model("newusers", {
  name:{type: String},
  email:{type: String},
  pancard:{type: String},
  mobile:{type: Number},
  aadhar:{type: Number},
  address:{type: String},
  password:{type: Number},
  accBal:{type: Number},
});
module.exports = newUser;
