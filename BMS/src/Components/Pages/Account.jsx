import React,{useState} from 'react'
import { Tab,Tabs } from "@mui/material";
import CreateAcc from '../CreateAccount/CreateAcc';

function Account() {
    const [val, setVal] = useState("createacc");
    const [data,setData]=useState([])

  
  localStorage.setItem("newuserdata", JSON.stringify(data));
  const handleSubmit=(formDetail)=>{
    setData([...data,formDetail])
  }

  return (
    <div>


      <div className="Tabs">
        <Tabs value={val} onChange={(e, val) => setVal(val)}>
          <Tab value="createacc" label="Create Acount" />
        </Tabs>
      </div>
      {val === "createacc" && <CreateAcc handleSubmit={handleSubmit}/>}
    </div>

  )
}

export default Account