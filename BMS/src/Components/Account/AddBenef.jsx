import React, { useEffect, useState } from "react";
import {TextField,Grid,Button,Card,CardContent,Alert,} from "@mui/material";
import axios from "axios";

const AddBenef = () => {
  const [accno, setAccno] = useState(0);
  const [bankname, setBankname] = useState("");
  const [branchname, setBranchname] = useState("");
  const [amnt, setAmnt] = useState(0);
  const [bname, setBname] = useState("");
  const [isactive] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [issuccess, setIsSuccess] = useState(false);
  const [isSuffamount, setIssuffamount] = useState(false);
  const [isValidacc, setIsvalidacc] = useState(false);

  useEffect(() => {
    setIssuffamount(amnt >= 500 || amnt === 0 || amnt === "");
  }, [amnt]);
  useEffect(() => {
    setIsvalidacc(accno.length === 10);
  }, [accno]);

  const handelbenef = async () => {
    const payload = {
      accno,
      bankname,
      branchname,
      amnt,
      bname,
      isactive,
    };
    const senddata = await axios.post(
      "http://localhost:4040/addBenef",
      payload
    );
    // console.log(senddata)
    setIsSuccess(senddata.data);

    setAccno("");
    setBankname("");
    setBranchname("");
    setAmnt("");
    setBname("");
    //   setIsActive("");
  };

  const handleCancel = () => {
    setAccno(0);
    setBankname("");
    setBranchname("");
    setAmnt(0);
    setBname("");
    // setIsActive("");
  };

  useEffect(() => {
    setIsValid(
      accno.length === 10 &&
        bankname.length >= 3 &&
        bname.length >= 4 &&
        amnt >= 500 &&
        branchname.length >= 5
    );
  }, [accno, bankname, branchname, amnt, bname, isactive]);
  return (
    <div className="form">
      {/* <h1>Add Benef</h1> */}
      <Card className="Card">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {issuccess !== "" && (
                <Alert severity="success">{issuccess}</Alert>
              )}
            </Grid>
            <Grid item xs={4}>
              Account Number:-
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={accno}
                label="Enter Account Number"
                variant="outlined"
                onChange={(e) => setAccno(e.target.value)}
                required
                type="Number"
              />
            </Grid>
            <Grid item xs={4}>
              {isValidacc ? (
                <Alert severity="success">Valid Account Number!</Alert>
              ) : (
                accno !== 0 && (
                  <Alert severity="error"> Please Enter Valid Acc Number</Alert>
                )
              )}
            </Grid>
            <Grid item xs={4}>
              Bank Name:-
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={bankname}
                label="Enter Bank Name"
                variant="outlined"
                onChange={(e) => setBankname(e.target.value.toUpperCase())}
                required
              />
            </Grid>
            <Grid item xs={4}>
              Branch Name:-
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={branchname}
                label="Enter Branch Name"
                variant="outlined"
                onChange={(e) => setBranchname(e.target.value.toUpperCase())}
                required
              />
            </Grid>
            <Grid item xs={4}>
              Amount:-
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={amnt}
                label="Enter Amount"
                variant="outlined"
                onChange={(e) => setAmnt(e.target.value)}
                required
                type="Number"
              />
            </Grid>
            <Grid item xs={4}>
              {!isSuffamount && (
                <Alert severity="error">
                  Amount shoud not be less than 500
                </Alert>
              )}
            </Grid>
            <Grid item xs={4}>
              Beneficiary Name:-
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={bname}
                label="Enter Beneficiary Name"
                variant="outlined"
                onChange={(e) => setBname(e.target.value.toUpperCase())}
                required
              />
            </Grid>
            {/* <Grid item xs={4}>
              IsActive:-
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={isactive}
                label="Enter isActive"
                variant="outlined"
                onChange={(e) => setIsActive(e.target.value.toUpperCase())}
                required
              />
            </Grid> */}
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                disabled={!isValid}
                onClick={handelbenef}
              >
                Add Beneficiary
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="error" onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
export default AddBenef