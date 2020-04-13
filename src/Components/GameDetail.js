import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getGameDetails, getGameDetailsGetVersion} from '../redux/actions'
import { Button } from 'semantic-ui-react'
import './css/general.css'
import './css/games.css'

class GameDetail extends React.Component{

    gameInfo(detailedGame){

        let {name, image_url, description, year_published, min_players, max_players, 
            min_playtime, max_playtime, publisher,
            } = detailedGame
        
        return (
            <div className='general-content'>
                <div className='game-block'>
                    <div className='game-image'>
                        <img src={image_url} alt={name}/>
                    </div>
                    <div className='game-details'>
                        {name}<br></br>
                        Game details:
                        <br></br>
                        {publisher? "Published by": null }{publisher? publisher : null }
                        {year_published ? year_published : null}
                        <br></br>
                        {min_players} - {max_players} players 
                        <br></br>
                        {min_playtime} - {max_playtime} minutes 
                    </div>
                </div>
                <br></br>
                <div className='game-description'
                 dangerouslySetInnerHTML={{__html: description}}>
                </div>
            </div>
        )
    }

    render(){


        return (
        <div>
            <div>
                
                {this.props.detailedGame? 
                    this.gameInfo(this.props.detailedGame)
                    : this.props.getGameDetails(this.props.routerProps.match.params.gameId) 
                }
                <br></br>
                <Link to='/games'><Button >Go Back To Games</Button>
                </Link>
            </div>
        </div>
        )
    }
}

// ownProps used here to distinguish it from props sent from the store
const mapStateToProps = (state, ownProps) => {

    return {
    //   detailedGame: state.games.find(game => game.id === ownProps.routerProps.match.params.gameId)
        detailedGame: state.detailedGame
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getGameDetails: (gameID) => {dispatch(getGameDetails(gameID))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail)