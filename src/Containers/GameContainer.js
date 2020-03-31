import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import GameList from '../Components/GameList'
import GameDetail from '../Components/GameDetail'
import SearchField from '../Components/SearchField'
import './css/game-container.css'
import '../Components/css/general.css'


class GameContainer extends React.Component {

    componentDidMount(){

    }

    render(){
        
        return(
            <div className='background-general' >
                <div className='game-container'>

                    <Switch>

                        <Route 
                            path="/games/:gameId"
                            render={(props) => <GameDetail routerProps={props}/>}
                        />
                    </Switch>
                    <div>
                    <br></br>
                        <SearchField />
                    </div>

                    <div>
                        <GameList source={"/games"}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
    }
}

export default connect(mapStateToProps)(GameContainer)