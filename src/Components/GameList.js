import React from 'react'
import GameCard from './GameCard'
import { connect } from 'react-redux'


const GameList = (props) => {

    return (
        <div className="ui container">
            <div className="ui celled selection list">
                {props.games.map(game => (
                    <GameCard 
                        key={game.id}
                        game={game}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      games: state.games
    }
  }

export default connect(mapStateToProps)(GameList)