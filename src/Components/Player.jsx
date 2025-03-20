import React from 'react';

const Player = ({player,handleChoosePlayer}) => {
    const {biddingPrice,bowlingType,battingType,role,image,country,name,}=player
    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
            <img className='w-full object-cover h-[250px] rounded-lg'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-2xl font-bold">{name}</h2>
            <p className=' font-bold text-gray-400'>Country: {country}</p>
            <p className=' font-bold text-gray-400'>Role: {role}</p>
            <p className=' font-bold text-gray-400'>Batting Type:{battingType}</p>
            <p className=' font-bold text-gray-400'>Bolling Type:{bowlingType}</p>
            <div className='flex gap-6 items-center'>
                <p className=' font-bold text-black-400'>Price: {biddingPrice}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>handleChoosePlayer(player)} className="btn">Choose player</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Player;