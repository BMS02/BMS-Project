import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";

export const Login = () => {
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();

  const handleClear = () => {
      setName("");
    setPwd("");
  };
  return (
    <div>
      <div className="form">
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <h3>Enter UserName :</h3>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Enter UserName"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <h3>Enter Password: </h3>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Enter Password"
              variant="outlined"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            {name === "Ahad" && pwd === "9595" ? (
              <Link to="/login/manageaccount">
                <Button variant="contained">Login</Button>
              </Link>
            ):null}
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" onClick={() => handleClear()}>
              RESET
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Link to="/">
              <Button variant="contained">CANCEL</Button>
            </Link>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    </div>
  );
};
