import React,{useState} from "react";
// import ShowItems from "./ShowItems";

function ShowBranch(){

    const result = JSON.parse(localStorage.getItem("userdata"));
    console.log(result);

    // const[data,setData]= useState([]);
    // setData(...data)
    // console.log(item)

    return(

        <div>
            <div className="form">
      <h2>Branch Details</h2>
      <div >
        <table >
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Branch</th>
            
          </tr>
          {result.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.City}</td>
                <td>{item.branch}</td>
                
              </tr>
            );
          })}
        </table>
      </div>
    </div>
            {/* <p>Hii show banks list</p>
            {
                result.map((item)=> {
                    return(
                        <tr>
                            
                             <ShowItems item={item}/>
                        </tr>
                    )
                }

                )
                
            }
             */}

        </div>
    )
}

export default ShowBranch