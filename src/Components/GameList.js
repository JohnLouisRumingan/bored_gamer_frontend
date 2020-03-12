import React from 'react'
import GameCard from './GameCard'
import { connect } from 'react-redux'


const GameList = (props) => {

    return (
        <div className="ui container">
            <div className="ui celled selection list">
                {(props.games) ? props.games.map(game => (
                    <GameCard 
                        key={game.id}
                        game={game}
                    />
                )) : null }
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
            games: state.gamesInCollection
        }
    }
}

export default connect(mapStateToProps)(GameList)