import React from "react";

const Selected = ({ selectedPlayers, handleRemovePlayer }) => {
  return (
    <div className="w-[90%] mx-auto mt-6 space-y-4">
      {selectedPlayers.length === 0 ? (
        <p className="text-center text-gray-500 text-2xl font-bold">No players selected</p>
      ) : (
        selectedPlayers.map((player) => (
          <div
            key={player.playerId}
            className="flex items-center gap-4 bg-white p-4 shadow-lg rounded-lg border border-gray-200"
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-16 h-16 rounded-full object-cover border"
            />
            <div className="flex-1">
              <h3 className="font-bold">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.role}</p>
            </div>
            <button
              onClick={() => handleRemovePlayer(player.playerId)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Selected;
