import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {showGameDetails} from '../redux/actions'

class GameDetail extends React.Component{

    state={

    }

    componentDidMount(){

        showGameDetails(this.props.routerProps)
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
      detailedGame: state.games.find(game => game.id === ownProps.routerProps.match.params.gameId)

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        showGameDetails: (ownProps) => {dispatch(showGameDetails(ownProps))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail)