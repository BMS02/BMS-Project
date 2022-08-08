import { TextField, Grid, Button,Alert } from "@mui/material";
import React, { useState } from "react";



function CreateAcc({handleSubmit}) {
  const [formDetail, setFormDetail] = useState({
    name: "Shaikh Ahad",
    email: "ahadskabdul@gmail.com",
    Pancard: "KHip2586SE",
    Mobile: "9604786415",
    Aadhar: "1880001234",
    Address: "Aurangabad",
    Password: "9595",
    Acc_Bal: "10000"
  });
  // const [data, setData] = useState([]);
  // const handleSubmit = () => {
  //   setData([...data, formDetail]);
  //   console.log(data);
  // };
  const handleReset =()=>{
    setFormDetail(" ");
  }
  return (
    <div className="form">
      <form>
        <Grid container>
        <Grid item xs={5}>
            <h5>Please fill the form to Create Account</h5>
          </Grid>
        </Grid> 
        <br/>
        <Grid container>
          <Grid item xs={1}>
            FullName :
          </Grid>{" "}
          <Grid item xs={4}>
            <TextField
              label="Full Name"
              variant="outlined"
              onChange={(e) => setFormDetail({ name: e.target.value })}
            />
          </Grid>
          <Grid item xs={1}>
            Email :
          </Grid>{" "}
          <Grid item xs={4}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={1}>
            Pancard Number :
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="PanCard Number"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Pancard: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={1}>
            Mobile Number :
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Mobile Number"
              type="number"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Mobile: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={1}>
            Aadhar Number :
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Aadhar Number"
              variant="outlined"
              type="number"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Aadhar: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={1}>
           Permanent Address :
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Address"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Address: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={1}>PassWord :</Grid>
          <Grid item xs={4}> <TextField
              label="Password"
              variant="outlined"
              type="number"

              onChange={(e) =>
                setFormDetail({ ...formDetail, password: e.target.value })
              }
            /></Grid>
                      <Grid item xs={1}>Balance:</Grid>

            <Grid item xs={4}> <TextField
              label="Acc_Bal"
              variant="outlined"
              type="number"

              onChange={(e) =>
                setFormDetail({ ...formDetail, Acc_Bal: e.target.value })
              }
              /></Grid>
              </Grid>
              <br />
              <Grid container>

<Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={() => handleSubmit(formDetail)}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={()=> handleReset()}>Cancel</Button>
          </Grid>
        <Grid item xs={2}></Grid>
              </Grid>
      </form>
      <br />
      <div>
        {/* <Grid>
          {data.map((item) => {
            return (
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Pancard</th>
                  <th>Mobile</th>
                  <th>Aadhar</th>
                  <th>Address</th>
                </tr>
                <tr>
                  <td> {item.name}</td>
                  <td> {item.email}</td>
                  <td> {item.Pancard}</td>
                  <td>{item.Mobile}</td>
                  <td> {item.Aadhar}</td>
                  <td> {item.Address}</td>
                </tr>
              </table>
            );
          })}
        </Grid> */}
      </div>
    </div>
  );
}
export default CreateAcc;
