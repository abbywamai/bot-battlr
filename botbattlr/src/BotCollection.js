import React, {useState, useEffect} from "react";
import BotProfile from "./BotProfile";


function BotCollection(){
    const [bots, setBots]= useState([]);

    useEffect(() =>{
        fetch('http://localhost:8001/bots')
        .then(res => res.json())
        .then(data => setBots(data))
        .catch(error => console.log(error))
    } , [])
    
    return(
<div className="botsdiv">
{bots.map(bot =>(
        <BotProfile key={bot.id} bots={bot}/>
    ))}
</div>
    )
}
export default BotCollection;