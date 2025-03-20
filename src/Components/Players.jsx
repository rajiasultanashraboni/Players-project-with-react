import React, { useEffect, useState } from 'react';
import Player from './Player';

const Players = ({handleChoosePlayer}) => {
    const [players,setPlayers]=useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data.players))

    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto mt-10 gap-6">
            {
                players.map(player=><Player handleChoosePlayer={handleChoosePlayer} player={player}></Player>)
            }
        </div>
    );
};

export default Players;