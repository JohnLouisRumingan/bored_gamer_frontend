import React from 'react'
import GameList from '../Components/GameList'

class GameContainer extends React.Component {

    componentDidMount(){

    }

    render(){
        
        return(
            <div>Game Container here 
                <GameList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }

export default GameContainer 