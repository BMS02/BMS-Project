import React, { useState } from "react";
import { TextField, Grid, Card, CardContent, Button,Alert } from "@mui/material";
import axios from "axios";
function AddBranch() {
  // const[data,setData]=useState([])
  const[name,setName]= useState("");
    const[branch,setBranch]=useState("");
    const[City,setCity]=useState("");
  const [details, setDetails] = useState({
    name: "ICIC",
    branch: "IT",
    City: "pune",
  });
  const[issuccess, setIssuccess]=useState(false);
  const handleSubmit= async ()=>{

    const url= "http://localhost:4040/addbranch";
    const payload={
        name,
        branch,
        City,
    };

    const result= await axios.post(url,payload);
    if(result.status===200){
    setIssuccess(true);
    setName("");
    setBranch("");
    setCity("");
}}
  //   sessionStorage.setItem("userdata", JSON.stringify(details));
  // const handleSubmit =()=>{
  //     setData([...data,details]);
  //     console.log(data)

  // }
  return (
    <div className="form">
      <form>
        <Grid container>
          <Grid item xs={4}>
            Bank Name:
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Enter Bank Name"
              variant="outlined"
              value={name}
              onChange={(e)=> setName(e.target.value.toUpperCase())}
              
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={4}>
            City Name:
          </Grid>

          <Grid item xs={8}>
            <TextField
              label="Enter City"
              variant="outlined"
              onChange={(e)=> setBranch(e.target.value.toUpperCase())}
              value={branch}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={4}>
            Branch Name:
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Enter Branch Name"
              variant="outlined"
              onChange={(e)=> setCity(e.target.value.toUpperCase())}
              value={City}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={() => handleSubmit(details)}>
              Submit
            </Button> 
          </Grid>
          <Grid item xs={12}>
                     {issuccess && (<Alert severity="success"> Branch is successfully added!!!</Alert>)}
                    </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default AddBranch;

