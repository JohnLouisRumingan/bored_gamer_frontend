import React from 'react'
import GameCard from './GameCard'
import { connect } from 'react-redux'
import './css/scrollable-list.css'

const GameList = (props) => {
    
    return (
        <div className='scrollable-list'>
            <div>

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

                {(props.games.length === 0 )? "No Results" : null}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    if(ownProps.source==="/games"){
        return {
          games: state.games
        }
    }
    else if(ownProps.source==="/profile"){
        return {
            games: state.gamesInCollection.filter(game => game.favorite === true || game.owned === true)
        }
    }
    else {
        return{
            games: []
        }
    }
    // else if(ownProps.source==="/meetups"){
    //     return {
    //         games: ownProps.games
    //     }
    // }
}

export default connect(mapStateToProps)(GameList)