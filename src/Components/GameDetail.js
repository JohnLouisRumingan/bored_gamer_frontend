import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getGameDetails, getGameDetailsGetVersion} from '../redux/actions'
import { Button } from 'semantic-ui-react'
import './css/general.css'

class GameDetail extends React.Component{

    render(){

        let {name, image_url, description, year_published, min_players, max_players, 
            min_playtime, max_playtime, publisher, price, min_age
        } = this.props.detailedGame

        return (
        <div>
            <div>
                Game Details<br></br>
                {this.props.detailedGame? 
                    <div>
                        {this.props.detailedGame.name}
                        <br></br>
                        <img src={this.props.detailedGame.image_url} alt={this.props.detailedGame.name}/>
                        <br></br>
                        {this.props.detailedGame.description}
                        Game details:
                        Min_player, max_player, playtime, other info
                    </div>

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