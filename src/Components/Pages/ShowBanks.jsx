import React,{useState} from "react";
import ShowItems from "./ShowItems";

function ShowBanks(item){
    const[data,setData]= useState([]);
    setData(...data)
    console.log(data)

    return(

        <div>
            <p>Hii show banks list</p>
            {
                data.map((item)=> (
                    <ShowItems item={item}/>

                ))
                
            }
            

        </div>
    )
}

export default ShowBanks