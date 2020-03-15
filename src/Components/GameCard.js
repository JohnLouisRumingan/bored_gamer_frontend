import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addToCollection} from '../redux/actions.js';


const GameCard = (props) => {

    let {id, name, designers, image_url, favorite, owned} = props.game

    return (
        
        <div className="content">
            <h2>
                <em>
                    {name} - Designed by: {designers}
                    {/* <img src={image_url}></img>  */}
                    {/* Uncomment above to show images once I've made smaller, standardized card containers for them. Some images are gigantic */}
                </em>
                <Link className="item" to={`/games/${id}`}><button className="ui small button">See details</button></Link>

                {props.profile? 
                    <div>
                        <button onClick={() => props.favoriteGame(props.game, props.profile)}>Favorite this game!</button>
                        <button onClick={()=> props.ownGame(props.game, props.profile)}>I own this game!</button>
                        {owned? "Game owned" : null}
                        {favorite? "Favorite game" : null}
                    </div>
                    :null
                }
            </h2>
        </div>
        
    )
}

const mapStateToProps = (state) => {

    return {
        profile: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        favoriteGame: (game, profile) => { dispatch(addToCollection(game, profile, "favorite"))},
        ownGame: (game, profile) => {dispatch(addToCollection(game, profile, "owned"))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameCard)