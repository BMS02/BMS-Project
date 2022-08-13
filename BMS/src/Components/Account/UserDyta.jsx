import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import {UserData} from "./User";
function UserDyta() {
  // const result = JSON.parse(localStorage.getItem("newuserdata"));
  // const [userDataShow,setUserDataShow]=useState();
    // console.log(result);
    const[data,setData]= useState([]);
    const getData=async()=>{
      const result= await axios.get("http://localhost:4040/User");
      setData(result.data);
  };
      
  
  
  useEffect(()=>{
      getData();
  },[])



  return (
    <div className='form'>
      <form>
<h1>Registered Account Holders</h1>
<table> 
<tr>
  <th>Name  :</th>
  <th>Email :</th>
  <th>Mobile:</th>
  <th>Password</th>
  <th>AccBal</th>
</tr>
{
  data.map((item)=>{
    return(

      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.mobile}</td>
        <td>{item.password}</td>
        <td>{item.accBal}</td>
      </tr>
    )
  })
}
  </table>
</form>
    </div>
  )
}

export default UserDyta