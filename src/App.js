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
import {fetchingGames, dispatchTodaysDate, fetchingMeetups} from './redux/actions.js'
import MeetupContainer from './Containers/MeetupContainer';
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/Backdrop/Backdrop'

class App extends Component {

  componentDidMount(){
    //Add this back later so app isn't constantly fetching from API while in development 
    this.props.fetchingGames() 

    // fetchingMeetups is invoked in fetchingGames to prevent any async problems. However, if above isn't being used, uncomment below during development
    this.props.fetchingMeetups() 

    this.props.todaysDate(new Date())
  }

  render(){

    let backdrop;
    if (this.props.sideDrawerOpen){
      backdrop = <Backdrop />
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <NavBar />
        <SideDrawer />
        {backdrop}
        <main style={{marginTop: '64px'}}>
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
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    sideDrawerOpen: state.sideDrawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingGames: ()=> dispatch(fetchingGames()),
    todaysDate: (currentDate) => dispatch(dispatchTodaysDate(currentDate)),
    fetchingMeetups: () => dispatch(fetchingMeetups())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
