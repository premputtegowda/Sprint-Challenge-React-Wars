import React  from "react";



function FilmCard(props){

    const film = props.film

    return (

       
    
            <div>
               <p>{film}</p>
           </div>

       
    )

}

export default FilmCard;