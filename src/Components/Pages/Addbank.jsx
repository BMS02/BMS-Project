import React, {useState,useEffect} from "react";
import {TextField, Grid, Card, CardContent, Button,Alert} from "@mui/material"
function Addbank(){



return(

    <div>
        <Card>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        Bank Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField label="Enter Bank Name" variant="outlined"/>
                    </Grid>

                    <Grid item xs={4}>
                      City Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField label="Enter City" variant="outlined"/>
                    </Grid>

                    <Grid item xs={4}>
                      Branch Name:
                    </Grid>
                    <Grid item xs={8}>
                        <TextField label="Enter Branch Name" variant="outlined"/>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>

    </div>
)
}

export default Addbank


