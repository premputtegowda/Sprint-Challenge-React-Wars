import React  from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

import styled from "styled-components";

const Heading = styled.span`
   
    font-size:16px;
    font-style: italics
    color: gray;
    font-weight: bold;
    margin-right: 5px;
`;



function CharacterCard({character}){
   
  
   

    return (
        <Col xs="6" md="4" lg="3/">
            <Card>
                <CardHeader>{character.name}, <Heading>{character.gender}</Heading></CardHeader>
                <CardBody>
                    <CardText><Heading>Hair Color:</Heading>{character.hair_color}
                    </CardText>
                    <CardText><Heading>Skin Color:</Heading>{character.skin_color}</CardText>
                    <CardText><Heading>Birth Year:</Heading>{character.birth_year}</CardText>

                
                </CardBody>
            </Card>
            

            
        </Col>
        
    )
             
        
   
}

export default CharacterCard;
    

   

       
    
            
    
