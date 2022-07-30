import { TextField } from "@mui/material";
import React from "react";

function Deposit(){

    return(

        <div>
            <p>HII this is debit</p>
            <TextField label="Account holder name" variant="outlined" />
            <TextField label="Account Number" variant="outlined" />
            <TextField label="Deposit Amount" variant="outlined"/>

        </div>
    )
}

export default Deposit