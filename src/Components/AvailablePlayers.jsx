import React from "react";

const AvailablePlayers = () => {
  return (
    <section className="p-6">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h2 className="text-lg font-bold">Available Players</h2>
        <div className="mt-4 flex items-center gap-2">
            <button className="bg-yellow-400 px-4 py-2 rounded-md shadow-md">
            Available
            </button>
            <button className="border px-4 py-2 rounded-md">Selected (0)</button>
        </div>
      </div>
    </section>
  );
};

export default AvailablePlayers;
