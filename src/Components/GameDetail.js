import React from 'react'
import { connect } from 'react-redux'

class GameDetail extends React.Component{


    render(){
        return (
            <div>
                Game Details<br></br>

                {this.props.detailedGame? this.props.detailedGame.name : null }
                <br></br>
                {this.props.detailedGame? <img src={this.props.detailedGame.image_url}/> : null }
                <br></br>
                {this.props.detailedGame? this.props.detailedGame.description : null }
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