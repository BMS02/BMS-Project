import { TextField, Grid, Button } from "@mui/material";
import React, { useState } from "react";

function CreateAcc() {
  const [formDetail, setFormDetail] = useState({
    name: "",
    email: "",
    Pancard: "",
    Mobile: "",
    Aadhar: "",
    Address: "",
  });
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    setData([...data, formDetail]);
    console.log(data);
  };
  return (
    <div className="form">
      <form>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <TextField
              label="Full Name"
              variant="outlined"
              onChange={(e) => setFormDetail({ name: e.target.value })}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <TextField
              label="PanCard Number"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Pancard: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Mobile: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <TextField
              label="Aadhar Number"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Aadhar: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Address"
              variant="outlined"
              onChange={(e) =>
                setFormDetail({ ...formDetail, Address: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">Cancel</Button>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </form>
      <br />
      <div>
        <Grid>
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
        </Grid>
      </div>
    </div>
  );
}
export default CreateAcc;
