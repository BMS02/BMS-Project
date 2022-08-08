import React, { useState } from "react";
import { Tab,Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import UserDyta from "./UserDyta";
import Transaction from "./Transaction";
import { UserData } from "./User";
import ShowTransaction from "./ShowTransaction";

export const ManageAccount = () => {
  const [val, setVal] = useState("userdyta");
  const[benef,setBenef]=useState(UserData);

  const [transactiondetails,setTransactiondetails]=useState([])
  localStorage.setItem("transData", JSON.stringify(transactiondetails));

  const handletransaction=(accholder)=>{
    setTransactiondetails([...transactiondetails,accholder])
  }
  console.log(transactiondetails)
// const balance = Number(transactiondetails.Acc_Bal)-Number(accholder.amnt);

  return (
    <div className="ManageAccount">
      <h1 className="admin">Services for Account holder</h1>

      {/* <Link to="/components/account/userdyta">Account Holder's</Link> */}

      <div className="Tabs">
        <Tabs value={val} onChange={(e, val) => setVal(val)}>
          <Tab value="userDyta" label="userData" />
          <Tab value="transaction" label="Transaction" />
          <Tab value="showtransaction" label=" Show Transaction" />
        </Tabs>
      </div>
      {val === "userDyta" && <UserDyta />}
      {val === "transaction" && <Transaction  handletransaction={handletransaction} benef={benef} />}
      {val === "showtransaction" && <ShowTransaction ShowAccBal={transactiondetails} />}
    </div>
  );
};
