import React from "react";
import Players from "./players";
import Selected from "./Selected";

const AvailablePlayers = ({toggleState,isActive,handleChoosePlayer,selectedPlayers,players,handleRemovePlayer}) => {
  return (
    <section className="p-6">
      <div className="flex justify-between items-center w-[90%] mx-auto">
            <h2 className="text-lg font-bold">
            {isActive.status === "available" 
              ? "Available Players" 
              : `Selected Players (${selectedPlayers.length}/${players.length})`}
          </h2>
        <div className="mt-4 flex items-center gap-2">
            <button onClick={()=>toggleState("available")} className={`px-4 py-2 rounded-md shadow-md cursor-pointer ${
              isActive.status === "available" ? "bg-yellow-400" : "bg-gray-200"
            }`}>
            Available
            </button>
            <button onClick={()=>toggleState("selected")} className={`px-4 py-2 rounded-md cursor-pointer ${
              isActive.status === "selected" ? "bg-yellow-400" : "border"
            }`}>Selected ({selectedPlayers.length})</button>
        </div>
        
      </div>
      {isActive.status === "available" && <Players handleChoosePlayer={handleChoosePlayer} players={players} />}
      {isActive.status === "selected" && <Selected selectedPlayers={selectedPlayers} handleRemovePlayer={handleRemovePlayer} />}
    </section>
    
    
  );
  
};




export default AvailablePlayers;
