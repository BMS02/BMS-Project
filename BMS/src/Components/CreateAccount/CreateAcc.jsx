import { TextField, Grid, Button,Alert } from "@mui/material";
import React, { useState ,useEffect} from "react";
import axios from 'axios'



function CreateAcc() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pancard,setPancard]=useState("");
  const [mobile,setMobile]=useState("");
  const [accBal,setAccBal]=useState(0);
  const [address,setAddress]=useState("");
  // const [AccBal,setAccBal]=useState("");
  const [password,setPassword]=useState("");
  const [aadhar,setAadhar]=useState("");
  const [formDetail, setFormDetail] = useState({
    name: "Shaikh Ahad",
    email: "ahadskabdul@gmail.com",
    pancard: "KHip2586SE",
    mobile: "9604786415",
    aadhar: "1880001234",
    address: "Aurangabad",
    password: "9595",
    accBal: "10000"
  });
// --------12/08/2022 by Ahad-------
  const[issuccess, setIssuccess]=useState(false);
  const handleSubmit= async ()=>{ 

    const url= "http://localhost:4040/createAcc";
    const payload={
        name,
        email,
        pancard,
        mobile,
        aadhar,
        address,
        password,
        accBal,
    };

    const result= await axios.post(url,payload);
    if(result.status===200){
    setIssuccess(true);
    setName("");
    setEmail("");
    setPancard("");
    setMobile("");
    setAadhar("");
    setAddress("");
    setPassword("");
    setAccBal("");
}}

  // const [data, setData] = useState([]);
  // const handleSubmit = () => {
  //   setData([...data, formDetail]);
  //   console.log(data);
  // };
  // const handleReset =()=>{
  //   setFormDetail(" ");
  // }
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
              onChange={(e) => setName( e.target.value.toUpperCase())}
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
                setEmail(e.target.value.toUpperCase() )
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
setPancard(e.target.value.toUpperCase())
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
                setMobile(e.target.value.toUpperCase())
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
                setAadhar(e.target.value.toUpperCase())
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
                setAddress(e.target.value.toUpperCase())
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
                setPassword(e.target.value.toUpperCase())
              }
            /></Grid>
                      <Grid item xs={1}>Balance:</Grid>

            <Grid item xs={4}> <TextField
              label="Acc Bal"
              variant="outlined"
              type="number"

              onChange={(e) =>
                setAccBal(e.target.value.toUpperCase())
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
          {/* <Grid item xs={2}>
            <Button variant="contained" onClick={()=> handleReset()}>Cancel</Button>
          </Grid> */}
        <Grid item xs={2}>
        {issuccess && (<Alert severity="success"> User  is successfully added!!!</Alert>)}
        </Grid>
        
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
