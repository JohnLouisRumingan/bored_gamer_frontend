import React from 'react'
import { connect } from 'react-redux'


const Login = () => {

    return (
        <div>
            Login Form here
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      // add states as needed here 
    }
  }

const mapDispatchToProps = (dispatch) => {
  
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);