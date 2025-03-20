import { useState } from "react"
import AvailablePlayers from "./Components/AvailablePlayers"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Players from "./Components/players"

function App() {
  const [coins,setCoin]=useState(0);

  const handleCredit=(coin)=>{
    const newCoin = coins+coin
    setCoin(newCoin)

  }

  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleCredit={handleCredit} coins={coins}></Banner>
      <AvailablePlayers></AvailablePlayers>
      <Players></Players>
      <Footer></Footer>
    </>
  )
}

export default App
