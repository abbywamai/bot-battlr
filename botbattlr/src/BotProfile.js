import React from "react";

function BotProfile ({bots}){
return(
<div>
    <h3>{bots.name}</h3>
    <img src={bots.avatar_url} alt={bots.name}></img>
    <p>h
        Health: {bots.health}</p>
    <p>Damage: {bots.damage}</p>
    <p>Armor: {bots.armor}</p>
    <p>Bot Class: {bots.bot_class}</p>
    <p>Created at: {bots.created_at}</p>
    <p>Updated at: {bots.updated_at}</p>
</div>
)
}
export default BotProfile;