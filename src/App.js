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
import MeetupContainer from './Containers/MeetupContainer';

class App extends Component {

  componentDidMount(){
    // this.props.fetchingGames() 
    //Add this back later so app isn't constantly fetching from API while in development 
  }

  render(){
    return (
      <div className="App" style={{height: '100%'}}>
        <NavBar />

        <Switch>
          <Route exact path='/profile' render={() => {
            return this.props.profile? 
              <ProfileContainer /> :
              <Redirect to ='/login' />
          }}/>

          <Route exact path ='/login' render={() => {
            return this.props.profile?
              <Redirect to='/profile' /> :
              <Login />
          }}/>
          <Route path='/meetups' component={MeetupContainer}/>
          <Route path='/games' component={GameContainer} />
          <Route exact path='/about' component={About}/>
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
