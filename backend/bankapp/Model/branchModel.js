const mongoose= require("mongoose");

const branchModel= mongoose.model("branches",{
    name: {type: String},
    branch: {type: String},
    City: {type: String},
});

module.exports = branchModel;
