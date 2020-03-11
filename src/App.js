import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './Components/Navbar.js'
import About from './Components/About.js'
import Login from './Components/Login.js'
import LandingPage from './Components/LandingPage.js'
import GamePage from './Components/GamePage/GamePage.js'
import {fetchingGames} from './redux/actions.js'

class App extends Component {

  componentDidMount(){
    this.props.fetchingGames()
  }

  render(){
    return (
      <div className="App" style={{height: '100%'}}>
        <NavBar />

        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/login' render={()=><Login />} />
          <Route exact path='/games' component={GamePage} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // add states as needed here 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingGames: ()=>{dispatch (fetchingGames())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
