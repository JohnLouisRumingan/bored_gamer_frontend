import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addToCollection, getGameDetails} from '../redux/actions.js';
import {Card, Image} from 'semantic-ui-react'

const GameCard = (props) => {

    let {id, name, designers, image_url, favorite, owned, game_id} = props.game

    //need to come back to this later and fix the dual-use nature of displaying in game page and displaying in profile page
    // will likely need to assign two sets of game info props and just make two sets of logic 

    return (
        
        <div className="content">
            <Card>
            <h2>
                <em>
                    <Image src={image_url} size='small'/>
                    {name}<br></br>
                    {designers? designers : null  }
                </em>
                {props.owner? <div>Owned by: {props.owner.name}</div>: null}
                {props.profile? 
                    <div>
                        {owned? "Game owned" : null}
                        {favorite? <i className="red heart icon"></i> : null}
                        <br></br>
                        <button onClick={() => props.favoriteGame(props.game, props.profile)}>Favorite or unfavorite this game!</button>
                        <button onClick={()=> props.ownGame(props.game, props.profile)}>Add or remove game from library</button>
                    </div>
                    :null
                }
                <Link className="item" to={game_id? `/games/${game_id}`: `/games/${id}`}>
                    <button className="ui small button" onClick={()=> 
                        game_id? props.getGameDetails(game_id) : props.getGameDetails(id)}>See details</button>
                </Link>
            </h2>
            </Card>
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
        ownGame: (game, profile) => {dispatch(addToCollection(game, profile, "owned"))},
        getGameDetails: (gameID) => {dispatch(getGameDetails(gameID))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameCard)