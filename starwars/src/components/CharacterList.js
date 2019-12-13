import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

function CharacterList(){
    const [characters, setCharacters] = useState([]);
    

    useEffect(()=> {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            
            setCharacters(response.data.results);
          
        })
        .catch( error => {
            console.log(error)
        })
    },[]);

    return (
        <Container>
            <Row>
            { characters.map(character => {
                return <CharacterCard character= {character} key={character.name} />;
            })}
            </Row>
        </Container>
     )

}

export default CharacterList;
