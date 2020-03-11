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
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {

    console.log(props) 
    return {
      detailedGame: state.games.find(game => game.id === props.routerProps.match.params.gameId)
    }
}


export default connect(mapStateToProps)(GameDetail)