import React,{useState} from 'react'
import {UserData} from "./User";
function UserDyta() {
  const result = JSON.parse(localStorage.getItem("newuserdata"));
  // const [userDataShow,setUserDataShow]=useState();
    console.log(result);
  return (
    <div className='form'>
      <form>
<h1>Registered Account Holders</h1>
{
  result.map((ele)=>{
    return(
      <table>
<tr>
  <th>Name  :</th>
  <th>Email :</th>
  <th>Mobile:</th>
  <th>Password</th>
  <th>Acc_Bal</th>
</tr>

      <tr>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.Mobile}</td>
        <td>{ele.Password}</td>
        <td>{ele.Acc_Bal}</td>
      </tr>
      </table>
    )
  })
}
</form>
    </div>
  )
}

export default UserDyta