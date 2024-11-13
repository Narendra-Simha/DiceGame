import React from 'react'
import styled from "styled-components"
const Rules = () => {
  return (
    <RulesContainer>
      <div className="text">
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point on the dice
      </p>
      <p>
        If you were wrong guess than two points will be reducted
      </p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    h2{
        font-weight: bold;
        /* font-size: 24px; */
    }

    .text{
        margin-top: 24px;
    }
`;
