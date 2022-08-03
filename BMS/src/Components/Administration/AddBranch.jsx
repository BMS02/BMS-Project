import React, { useState } from "react";
import { TextField, Grid, Card, CardContent, Button } from "@mui/material";
function AddBranch({ handleSubmit }) {
  // const[data,setData]=useState([])
  const [details, setDetails] = useState({
    name: "ICIC",
    branch: "IT",
    City: "pune",
  });
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
              onChange={(e) => setDetails({ name: e.target.value })}
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
              onChange={(e) =>
                setDetails({ ...details, branch: e.target.value })
              }
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
              onChange={(e) => setDetails({ ...details, City: e.target.value })}
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
        </Grid>
      </form>
    </div>
  );
};
export default AddBranch;