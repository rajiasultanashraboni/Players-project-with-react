import { useState } from "react"
import AvailablePlayers from "./Components/AvailablePlayers"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from 'react';


function App() {
  // fetch data 
  const [players,setPlayers]=useState([])
  
      useEffect(()=>{
          fetch('players.json')
          .then(res=>res.json())
          .then(data=>setPlayers(data.players))
  
      },[])
  // coin add is here 
  const [coins,setCoin]=useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  const [selectedPlayers,setSelectedPlayers]=useState([])

  const handleChoosePlayer=(player)=>{
    const isExist = selectedPlayers.find(p=>p.playerId===player.playerId)
    const biddingPrice = parseInt(player.biddingPrice, 10);
    if(coins<biddingPrice){
      toast.error(" Not enough money to choose player!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    if(isExist){
      toast.error(" This player is already selected!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    else{
      const newSelectedPlayer = [...selectedPlayers,player]
      setSelectedPlayers(newSelectedPlayer)
      const newCoin = coins - biddingPrice;
      setCoin(newCoin);
      toast.success(` ${player.name} added successfully!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  }
  
  // button tooggle is here 
  const toggleState = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };
// credit button functionality 
  const handleCredit=(coin)=>{
    const newCoin = coins+coin
    setCoin(newCoin)
    toast.success("money is Successfully added", {
      position: "top-center"
    });
    

  }

  // handle remove player 
  const handleRemovePlayer=(id)=>{
    const removedPlayer = selectedPlayers.find((player) => player.playerId === id);

  if (removedPlayer) {
    const newCoin = coins + parseInt(removedPlayer.biddingPrice);
    setCoin(newCoin);
  }
    const updatedPlayers = selectedPlayers.filter(player=>player.playerId !==id)
    setSelectedPlayers(updatedPlayers)
    toast.info(`${removedPlayer.name} removed successfully!`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });

  }



  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleCredit={handleCredit}></Banner>
      <AvailablePlayers selectedPlayers={selectedPlayers} handleChoosePlayer={handleChoosePlayer} isActive={isActive} toggleState={toggleState} players={players} handleRemovePlayer={handleRemovePlayer} ></AvailablePlayers>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
