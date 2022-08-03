import React, { useState } from "react";
import { Tab,Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import UserDyta from "./UserDyta";
import Transaction from "./Transaction";

export const ManageAccount = () => {
  const [val, setVal] = useState("userdyta");

  return (
    <div className="ManageAccount">
      <h1 className="admin">Services for Account holder</h1>

      {/* <Link to="/components/account/userdyta">Account Holder's</Link> */}

      <div className="Tabs">
        <Tabs value={val} onChange={(e, val) => setVal(val)}>
          <Tab value="userDyta" label="userData" />
          <Tab value="transaction" label="Transaction" />
        </Tabs>
      </div>
      {val === "userDyta" && <UserDyta />}
      {val === "transaction" && <Transaction />}
    </div>
  );
};
