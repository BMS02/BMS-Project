import React,{useState} from 'react'
import {ExistingData} from './ExistingUser';


function ShowTransaction({transactiondetails}) {
    const [ExUser,setExUSer]=useState(ExistingData);
    const [trans,setTrans]=useState([])
    const result = JSON.parse(localStorage.getItem("transData"));
// console.log(ExUser.name);
// const balance = Number(ExUser.Acc_Bal)-Number(result.amnt);

const Increment =(ExUser,result)=>{
    setTrans(Number(ExUser.Acc_Bal)-Number(result.amnt));
}
console.log(Increment)
// const Balance= Number(ExUser.Acc_Bal)
//   Number(result.amnt);
// console.log(Balance)

  return (
    <div className='form'>
        <h1>This is Transaction</h1>
<h1>{trans}</h1>
        {result.map((item)=>{
            return(
                <table>
                <tr>
                    <th>Amount </th>
                    <th>Name </th>
                </tr>
                <tr>
                    <td>{item.amnt}</td>
                    <td>{item.name}</td>
                    {/* <td>{item.amnt}</td> */}
                </tr>
                </table>
            )
        })}
        <div>
{ExUser.map((item)=>{
    return(
        <div>

            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
            <h1>{item.Acc_Bal}</h1>

        </div>
    )
})}
            </div>
    </div>
  )
}

export default ShowTransaction