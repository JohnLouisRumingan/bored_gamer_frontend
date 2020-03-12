import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {favoriteThisGame} from '../redux/actions.js';


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

                {props.profile? 
                    <div>
                        <button onClick={() => props.favoriteGame(props.game, props.profile)}>Favorite this game!</button>
                        <button>I own this game!</button>
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
        favoriteGame: (game, profile) => { dispatch(favoriteThisGame(game, profile))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameCard)