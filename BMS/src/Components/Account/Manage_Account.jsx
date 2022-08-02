import React,{useState} from "react";
import {Tab} from "@mui/material"
import { Link } from "react-router-dom";
import UserDyta from "./UserDyta";

export const ManageAccount = () => {
    const [val, setVal] = useState("userDyta");

  return (
    <div className="ManageAccount">
      <h1 className="admin">Services for Account holder</h1>

      <Link to="/components/account/userdyta">Account Holder's</Link>
      
      <div>
      {/* <Tab value="userDyta" label="userDyta" />

      {val === "userDyta" && <UserDyta/>} */}

      
      </div>
    </div>
  );
};