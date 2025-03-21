
import Player from './Player';

const Players = ({handleChoosePlayer,players}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto mt-10 gap-6">
            {
                players.map(player=><Player handleChoosePlayer={handleChoosePlayer} player={player}></Player>)
            }
        </div>
    );
};

export default Players;