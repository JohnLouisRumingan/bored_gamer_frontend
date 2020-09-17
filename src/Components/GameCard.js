import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addToCollection, getGameDetails} from '../redux/actions.js';
import {Card, Image } from 'semantic-ui-react'
import '../Containers/css/game-container.css'
import PropTypes from 'prop-types'

const propTypes = {
    game: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        favorite: PropTypes.bool.isRequired,
        owned: PropTypes.bool.isRequired,
        game_id: PropTypes.string.isRequired,
    })},

    defaultProps = {
        game: {
            id: 1,
            name: "defaultName",
            image_url: "defaultURL",
            favorite: false,
            owned: false,
            game_id: "defaultID"
        }
    }

const GameCard = (props) => {

    const { id, name, image_url, favorite, owned, game_id } = props.game;

    //need to come back to this later and fix the dual-use nature of displaying in game page and displaying in profile page
    // will likely need to assign two sets of game info props and just make two sets of logic 
    // bad imperative design, will have to consider declarative design with a data provider pattern 

    return (
        <Card>
        <h2>
            <em>
                <Image src={image_url} size='small'/>
                <span>{name}</span><br></br>
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
            {/* change Link to a due to failing tests */}
            <a className="item" to={game_id? `/games/${game_id}`: `/games/${id}`}>
                <button className="ui small button" onClick={()=> 
                    game_id? props.getGameDetails(game_id) : props.getGameDetails(id)}>See details</button>
            </a>
        </h2>
        </Card>
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


export default connect(mapStateToProps, mapDispatchToProps)(GameCard);

GameCard.propTypes = propTypes;
GameCard.defaultProps = defaultProps;