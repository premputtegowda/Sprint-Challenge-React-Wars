import React from 'react';
import './App.css';
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const TitleHeader = styled.header`
  background-color: black;
`
const H1Tag = styled.h1`
  color: white;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">

      <TitleHeader>
        <H1Tag className="Header">React Wars</H1Tag>
      </TitleHeader>
      
      <CharacterList />
    </div>
  );
}

export default App;
