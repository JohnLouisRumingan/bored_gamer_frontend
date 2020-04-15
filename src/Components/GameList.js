import React from 'react'
import GameCard from './GameCard'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import './css/scrollable-list.css'
import '../Containers/css/game-container.css'

const GameList = (props) => {
    
    return (
        <div className='scrollable-list'>
            <div className='game-list'>
                <Card.Group>
                    {(props.games) ? props.games.map(game => (
                        <GameCard 
                            key={game.game_id? game.game_id : game.id}
                            game={game}
                        />
                    )) : null }

                    {(props.collection)? props.collection.map( collection => (
                        <GameCard 
                        key={collection.game.game_id}
                        game={collection.game}
                        owner={collection.owner}
                        />
                        ))
                        : null}

                    {(props.games.length === 0 && (props.source==="/games" || props.source==='/profile') )? "No Results" : null}
                </Card.Group>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    if(ownProps.source==="/games"){
        return {
          games: state.games,
          source: "/games",
        }
    }
    else if(ownProps.source==="/profile"){
        return {
            games: state.gamesInCollection.filter(game => game.favorite === true || game.owned === true),
            source: "/profile",
        }
    }
    else {
        return{
            games: []
        }
    }
}

export default connect(mapStateToProps)(GameList)