import React,{useEffect, useState} from 'react';
import { Alert, TextField,Button,Grid,Select,MenuItem} from "@mui/material";
import { UserData } from './User';
import { isEditable } from '@testing-library/user-event/dist/utils';


function Transaction({handletransaction,benef}) {
  const[accholder,setAccholder]= useState({});
  // const[accno, setAccno]=useState(0);
  // const [amount,setAmount]=useState(0);
  const[submit,setSubmit]=useState({});
  const[msg,setMsg]=useState(benef);

  const result= [accholder]

  // console.log(msg)
  // useEffect(()=>{
  //   setSubmit({name:accholder,account_no:accno,amnt:amount})
  // },[])
  console.log(accholder)
return (
    <div>
      <h1>Hello Transaction</h1> 
      <p>HII this is deposit</p>
      <Select
              value={accholder.name}
              label="Account Holder name"
              onChange={(e) =>
                setAccholder({...accholder, name: e.target.value })
              }
            >
              {msg.map((item) => {
                return <MenuItem value={item.name}>{item.name}</MenuItem>;
              })}
            </Select>

            <Select
              value={accholder.account_no}
              label="Account Number"
              onChange={(e) =>
                setAccholder({...accholder, account_no: e.target.value })
              }
            >
              {msg.map((item) => {
                return <MenuItem value={item.account_no}>{item.account_no}</MenuItem>;
              })}
            </Select>
             {/* <TextField label="Account holder name" variant="outlined" onChange={(e)=> setAccholder({name:e.target.value})} />
            <TextField label="Account Number" variant="outlined" onChange={(e)=> setAccholder({...accholder,No:e.target.value})} /> */}
            <TextField label="Deposit Amount" variant="outlined" onChange={(e)=> setAccholder({...accholder,amnt:e.target.value})}/>
            <Button variant="contained" onClick={()=>handletransaction(accholder)}>Submit Amount</Button>
            {/* <Button onClick={handleCancel}>Cancel</Button> */}
            {/* <Alert severity="Success">{msg}</Alert> */}
            {/* <p>{msg}</p> */}
            <div>
              
                {
                result.map((item)=>{
                    return(
                      <div>
                      
                        <h3>{item.name}</h3>
                        <h3>{item.account_no}</h3>
                        <h3>{item.amnt}</h3>
                      </div>
                    
                    )

                  })
                }
            
            </div>
      
      </div>

  )
}
export default Transaction;