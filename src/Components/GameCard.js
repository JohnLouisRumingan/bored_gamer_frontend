import React from 'react'
import {Link} from 'react-router-dom';


const GameCard = (props) => {

    let {id, name, designers, image_url} = props.game

    return (
        
        <div className="content">
            <h2>
                <em>
                    {name} - Designed by: {designers}
                    {/* <img src={image_url}></img>  */}
                    {/* Uncomment above to show images once I've made smaller, standardized card containers for them. Some images are gigantic */}
                </em>
                <Link className="item" to={`/games/${id}`}>See details</Link>
            </h2>
        </div>
        
    )
}


export default GameCard 