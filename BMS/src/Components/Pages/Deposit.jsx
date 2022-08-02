import { TextField,Grid,Button } from "@mui/material";
import React,{useState,useEffect} from "react";

function Deposit(){
    const [data,setData]=useState();
    const [dyta,setDyta]=useState([]);
    
    const [acName,setAcName]=useState("");
    const [acNum,setAcNum]=useState("");
    const [acDep,setAcDep]=useState("");
    const handlesubmit =()=>{
        setDyta([...dyta,data]);
    }
    useEffect(()=>{
setData(`${acName} ${acNum} ${acDep}`)
    }) 

    return(

        <div>
            <p>HII this is debit</p>
            <Grid container>

                <Grid item xs={0.5}>
                </Grid>
                <Grid item xs={2}>
                    
            <TextField label="Account holder name" variant="outlined" onChange={(e)=>setAcName(e.target.value)} />
                </Grid>
                <Grid item xs={0.5}>
                </Grid>
                <Grid item xs={2}>
            <TextField label="Account Number" variant="outlined" onChange={(e)=>setAcNum(e.target.value)} />

            </Grid>
            <Grid item xs={0.5}>
                </Grid>
                <Grid item xs={2}>
            <TextField label="Deposit Amount" variant="outlined" onChange={(e)=>setAcDep(e.target.value)}/>

                </Grid>
                <Grid item xs={0.5}>
                </Grid>
                <Grid item xs={3}>
                <Button
                variant="contained"
                onClick={handlesubmit}
                // disabled={!isvalid}
              >
                Submit Transaction
              </Button>

                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
<h1>{dyta}</h1>
        </div>
    )
}

export default Deposit