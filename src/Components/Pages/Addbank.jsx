import React, {useState} from "react";
import {TextField, Grid, Card, CardContent, Button} from "@mui/material"
function Addbank(){

    const[data,setData]=useState([]);
    const[details,setDetails]=useState({name:"ICIC", branch:"IT", City:"pune"});
    const handleclick =()=>{
        setData([...data,details]);
        console.log(data)

    }
return(

    <div>
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        Bank Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField label="Enter Bank Name" variant="outlined" onChange={(e)=>setDetails({name:e.target.value})}/>
                       
                    </Grid>

                    <Grid item xs={4}>
                      City Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField label="Enter City" variant="outlined" onChange={(e)=>setDetails({...details,branch:e.target.value})}/>
                    </Grid>

                    <Grid item xs={4}>
                      Branch Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField label="Enter Branch Name" variant="outlined" onChange={(e)=>setDetails({...details,City:e.target.value})}/>
                    </Grid>

                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" onClick={handleclick}>Submit</Button>

                    </Grid>

                    

                </Grid>
            </CardContent>
        </Card>
        <div>
            <Grid>
                {
                    data.map((item)=>{
                        return(
                            <table>
                                <td>{item.name}</td>
                                <td>{item.branch}</td>
                                <td>{item.City}</td>
                            </table>

                        
                        )
                    })
                }
            </Grid>
        </div>
      
    </div>
    

    

    
        
)
}

export default Addbank


