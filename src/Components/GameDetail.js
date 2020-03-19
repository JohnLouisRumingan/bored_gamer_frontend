import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getGameDetails, /*showGameDetails*/} from '../redux/actions'

class GameDetail extends React.Component{

    state={

    }

    componentDidMount(){

        getGameDetails(this.props.routerProps.match.params.gameId)
    }

    componentDidUpdate(){
        // getGameDetails(this.props.routerProps.match.params.gameId)
        // showGameDetails(this.props.routerProps)
    }

    render(){
        return (
            <div>
                Game Details<br></br>

                {this.props.detailedGame? 
                    <div>
                    {this.props.detailedGame.name}
                    <br></br>
                    <img src={this.props.detailedGame.image_url} alt={this.props.detailedGame.name}/>
                    <br></br>
                    {this.props.detailedGame.description}
                    </div>
                    : null 
                }
                <Link to='/games'><button className="ui small button">Close Details</button>
                </Link>
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
        // showGameDetails: (gameID) => {dispatch(showGameDetails(gameID))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail)