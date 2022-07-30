import React, {useState} from "react";
import {Tabs,Tab} from "@mui/material";
import Addbank from "./Addbank";
import ShowBanks from "./ShowBanks";
import Deposit from "./Deposit";
// import ShowItems from "./ShowItems";

function OnlineBanking(){
  const [val,setVal]=useState("addbank");

  return(

    <div>
      <h3>online banking - diffrent tabs to explore</h3>
      <Tabs value={val} onChange={(e,val)=> setVal(val)}>
        <Tab value="addbank" label="Add Bank"/>
        <Tab value="showbank" label="Show Bank"/>
        <Tab value="deposit" label="Deposit"/>
        {/* <Tab value="showitems" label="ShowItems"/> */}
        
      </Tabs>

      {val==="addbank" && <Addbank/>}
      {val==="showbank" && <ShowBanks/>}
      {val==="deposit" && <Deposit/>}
    

    </div>
  )
}

export default OnlineBanking

