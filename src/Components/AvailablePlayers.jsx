import React from "react";
import Players from "./players";
import Selected from "./Selected";

const AvailablePlayers = ({toggleState,isActive}) => {
  return (
    <section className="p-6">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h2 className="text-lg font-bold">Available Players</h2>
        <div className="mt-4 flex items-center gap-2">
            <button onClick={()=>toggleState("available")} className={`px-4 py-2 rounded-md shadow-md ${
              isActive.status === "available" ? "bg-yellow-400" : "bg-gray-200"
            }`}>
            Available
            </button>
            <button onClick={()=>toggleState("selected")} className={`px-4 py-2 rounded-md ${
              isActive.status === "selected" ? "bg-yellow-400" : "border"
            }`}>Selected (0)</button>
        </div>
        
      </div>
      {isActive.status === "available" && <Players />}
      {isActive.status === "selected" && <Selected />}
    </section>
    
    
  );
  
};




export default AvailablePlayers;
