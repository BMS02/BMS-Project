import React from "react";
import {Grid,Card, CardContent} from "@mui/material";

function ShowItems(item){

    return(

        <div>
               <Card className="rowdata">
        <CardContent>
        <Grid container>
            <Grid item xs={4}>
              <h2> {item.name}</h2> 
            </Grid>

            <Grid item xs={4}>
                <h5>{item.branch}</h5>
                
            </Grid>

            <Grid>
               <h3>{item.City}</h3>
            </Grid>
            

        </Grid>
        </CardContent>
        </Card>

        </div>
    )
}

export default ShowItems