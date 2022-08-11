const mongoose= require("mongoose");

const branchModel= mongoose.model("asrabanks",{
    name: {type: String},
    branch: {type: String},
    City: {type: String},
});

module.exports = branchModel;
