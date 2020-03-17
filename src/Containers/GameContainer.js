import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import GameList from '../Components/GameList'
import GameDetail from '../Components/GameDetail'
import SearchField from '../Components/SearchField'


class GameContainer extends React.Component {

    componentDidMount(){

    }

    render(){
        
        return(
            <div>
                <Switch>

                    <Route 
                        path="/games/:gameId"
                        render={(props) => <GameDetail routerProps={props}/>}
                    />
                </Switch>

                Search for games
                Kickstarter
                Designer
                Publisher
                Min_Players
                Max_Players
                Year Published
                Alphabetical
                <SearchField />

                <div>
                    <GameList source={"/games"}/>
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