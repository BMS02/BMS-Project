import React,{useState, useEffect} from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from 'axios'
const ShowBenef = ({ item }) => {



  const[data,setData]= useState([]);
    const getData=async()=>{
      const result= await axios.get("http://localhost:4040/benef");
      setData(result.data);
  };
      
  
  
  useEffect(()=>{
      getData();
  },[])
  return (
    <div>
      <Card>
        <CardContent>
          <div className="rowdata">
            {data.map((item)=>  {



              <Grid container spacing={3}>
              <Grid item xs={2.3}>
                {item.accno}
              </Grid>
              <Grid item xs={2.3}>
                {item.bankname}
              </Grid>
              <Grid item xs={2.3}>
                {item.branchname}
              </Grid>
              <Grid item xs={2.3}>
                {item.amnt}
              </Grid>
              <Grid item xs={2.3}>
                {item.bname}
              </Grid>
              {/* <Grid item xs={2}>
                {item.isActive}
              </Grid> */}
            </Grid>
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ShowBenef