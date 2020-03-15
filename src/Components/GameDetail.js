import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GameDetail extends React.Component{


    render(){
        return (
            <div>
                Game Details<br></br>

                {this.props.detailedGame? 
                    <div>
                    {this.props.detailedGame.name}
                    <br></br>
                    <img src={this.props.detailedGame.image_url}/>
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


export default connect(mapStateToProps)(GameDetail)