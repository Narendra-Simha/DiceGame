// import './App.css'
// import styled from "styled-components";
import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";


function App() {
  // const [count, setCount] = useState(0)
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);

  }

  let message;
  if(isGameStarted){
    message=<GamePlay/>
  }else{
    message=<StartGame toggle={toggleGamePlay}/>
  }

  return (
    <>
    {
      message
      // isGameStarted? <GamePlay/>:<StartGame toggle={toggleGamePlay}/>
 
      
    }
    
      
    </>
  )
}

export default App


{/* <Button>
        This is styled component button
</Button> */}