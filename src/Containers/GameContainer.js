import React from 'react'
import GameCard from '../Components/GameCard.js'

class GameContainer extends React.Component {

    componentDidMount(){

    }

    render(){
        
        return(
            <div>Game Container here 
                <GameCard />
                <GameCard />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }

export default GameContainer 