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
    }
    else{
      const newSelectedPlayer = [...selectedPlayers,player]
      setSelectedPlayers(newSelectedPlayer)
      toast.success(" Player added successfully!", {
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
    toast.success("money is Successfully added", {
      position: "top-center"
    });
    const newCoin = coins+coin
    setCoin(newCoin)

  }

  // handle remove player 
  const handleRemovePlayer=(id)=>{
    const updatedPlayers = selectedPlayers.filter(player=>player.playerId !==id)
    setSelectedPlayers(updatedPlayers)
    toast.info("Player removed!", {
      position: "top-right",
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
