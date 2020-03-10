import React from 'react';
import './App.css';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import NavBar from './Components/Navbar.js'
import About from './Components/About.js'
import Login from './Components/Login.js'

const App = () => {
  return (
    <div className="App" style={{height: '100%'}}>
      <NavBar />

      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' render={()=><Login />} />
      </Switch>
  
    </div>
  );
}

export default App;
