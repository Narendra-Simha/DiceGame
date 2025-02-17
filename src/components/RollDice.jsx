import React from 'react'
import styled from "styled-components";



const RollDice = ({currentDice,rollDice}) => {
    

   

  return (
    <DiceContainer>
      <div className="dice"  onClick={rollDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`
display: flex;
align-items: center;
margin-top: 48px;
flex-direction: column;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px ;
}

`;
