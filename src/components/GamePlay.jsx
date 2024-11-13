import React from 'react'
import styled from 'styled-components';
import TotalScore from "./TotalScore";
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { useState } from 'react';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';


const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules, setShowRules]=useState(false);

  const generateRandomNumber = (min, max) =>{
    console.log(Math.floor(Math.random()*(max-min)+min));
    return Math.floor(Math.random()*(max-min)+min);
}; 

const rollDice=()=>{

    if(!selectedNumber){
        setError("You have not selected any number");
        return;
    }
    setError("");
    const RandomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev) => RandomNumber);

    
    if(selectedNumber==RandomNumber){
      setScore((prev)=>prev+RandomNumber);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined)
}

  const resetScore=()=>{
    setScore((prev)=>0)
  }

  const displayRules=()=>{
    if(showRules){setShowRules(false);}
    else{
      setShowRules(true);
    }
  }

  return (
    <MainComponent>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={displayRules}>{showRules ? "Hide":"Show"}  rules</Button>
      </div>
      {showRules&&<Rules/>}
    </MainComponent>
  )
}

export default GamePlay

const MainComponent=styled.main`
padding-top: 70px;
.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.btns{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
`;
