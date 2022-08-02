import React,{useState} from 'react'
import {UserData} from "./User";
function UserDyta() {
    const [userDataShow,setUserDataShow]=useState(UserData);

  return (
    <div>
<h1>User's of Bank</h1>
{
  userDataShow.map((ele)=>{
    return(
      <tr>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.Mobile}</td>
      </tr>
    )
  })
}

    </div>
  )
}

export default UserDyta