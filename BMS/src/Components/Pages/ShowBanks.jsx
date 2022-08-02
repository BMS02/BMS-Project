import React,{useState} from "react";
// import ShowItems from "./ShowItems";

function ShowBanks(){

    const result = JSON.parse(localStorage.getItem("userdata"));
    console.log(result);
    console.log(result);

    // const[data,setData]= useState([]);
    // setData(...data)
    // console.log(item)

    return(

        <div>
            <div>
      <h2 className="admin">Details</h2>
      <div className="detailst">
        <table className="table">
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Bank</th>
            
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

export default ShowBanks