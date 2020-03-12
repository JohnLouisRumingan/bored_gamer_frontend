import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './Components/Navbar.js'
import About from './Components/About.js'
import Login from './Components/Login.js'
import LandingPage from './Components/LandingPage.js'
import GameContainer from './Containers/GameContainer'
import ProfileContainer from './Containers/ProfileContainer'
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
          {this.props.profile? 
            <div><Route exact path='/profile' component={ProfileContainer}/> <Redirect to='/profile' /></div>: 
            <div><Route exact path='/login' render={()=><Login />} /><Redirect to='/login' /></div>
          }
          <Route path='/games' component={GameContainer} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingGames: ()=>{dispatch (fetchingGames())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
