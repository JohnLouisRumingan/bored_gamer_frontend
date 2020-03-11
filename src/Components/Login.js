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

export default connect(mapStateToProps)(Login)