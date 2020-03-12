import React from 'react'
import { connect } from 'react-redux'
import {login } from '../redux/actions'

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      username: "", 
      password: ""
    }
  }

  login = (e) => {
    e.preventDefault()
    console.log("Logging in...", this.state.username, this.state.password)
    this.props.login(this.state.username, this.state.password)
  }

  changeField(e){

    let newValue = e.target.value;
    let key = e.target.name 

    //dynamic form filling here

    let stateObject = (key, newValue) => {
      let newObj = {};
      newObj[key] = newValue;
      console.log(newObj)
      return newObj 
    }

    this.setState(stateObject(key, newValue))
  }

  render(){
    return (
        <div>
           <form onSubmit={(e) => this.login(e)}>
            <div>
              <input type="text" name="username" placeholder="Username" value={this.state.username}  onChange={e => this.changeField(e)}/>
              <br></br>
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={e => this.changeField(e)}/>
              <br></br>
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login" />
           </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
    }
  }

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {dispatch(login(username, password))}
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);