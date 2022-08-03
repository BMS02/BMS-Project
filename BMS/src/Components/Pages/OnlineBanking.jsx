// import React from 'react'
// import {Link} from 'react-router-dom'
// // import {AddBank} from './OnlineBanking/AddBranch';




// function OnlineBanking() {
//   return (
//     <div className='NavTab'>
//             <Link to="/components/pages/ddbank">AddBank</Link>
//             <Link to="/onlinebanking/debit">Debit</Link>

//     </div>
//   )
// }

// export default OnlineBanking

import React, {useState} from "react";
import {Tabs,Tab} from "@mui/material";
import AddBranch from "./AddBranch";
import ShowBranch from "./ShowBranch";
import Deposit from "./Deposit";
import ShowItems from "./ShowItems";
// import Deposit from "./Deb11";
// import ShowItems from "./ShowItems";

function OnlineBanking(){
  const [val,setVal]=useState("addbank");
  const [data,setData]=useState([])
  
  localStorage.setItem("userdata", JSON.stringify(data));
  const handleSubmit=(details)=>{
    setData([...data,details])
  }
  return(
    <div>
      <h3>online banking - diffrent tabs to explore</h3>
      <Tabs value={val} onChange={(e,val)=> setVal(val)}>
        <Tab value="addbranch" label="Add Branch"/>
        <Tab value="showbranch" label="Show Branch"/>
        <Tab value="deposit" label="Deposit"/>
        {/* <Tab value="showitem" label="SHow Item"/> */}
        {/* <Tab value="deposit" label="Deposit"/> */}
        {/* <Tab value="showitems" label="ShowItems"/> */}

      </Tabs>

      {val==="addbranch" && <AddBranch handleSubmit={handleSubmit}/>}
      {val==="showbranch" && <ShowBranch />}
      {val==="deposit" && <Deposit/>}
      {/* {val==="showitem" && <ShowItems />} */}
      {/* {val==="deposit" && <Deposit/>} */}


    </div>
  )
}
export default OnlineBanking
