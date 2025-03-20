import { useState } from "react"
import AvailablePlayers from "./Components/AvailablePlayers"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [coins,setCoin]=useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  const [selectedPlayers,setSelectedPlayers]=useState([])

  const handleChoosePlayer=(player)=>{
    const isExist = selectedPlayers.find(p=>p.id===player.id)
    if(isExist){
      alert('this product is already exist')
    }
    else{
      const newSelectedPlayer = [...selectedPlayers,player]
      setSelectedPlayers(newSelectedPlayer)
    }
  }
console.log(selectedPlayers)
  
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


  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleCredit={handleCredit}></Banner>
      <AvailablePlayers selectedPlayers={selectedPlayers} handleChoosePlayer={handleChoosePlayer} isActive={isActive} toggleState={toggleState}></AvailablePlayers>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
