import React from 'react'
import { connect } from 'react-redux'
import GameList from '../Components/GameList'


const Profile = (props) => {

    let {username, name, bio, avatar} = props.profile

    return (
        <div>Profile page
            Username: {username}
            <br></br>
            Name: {name}
            <br></br>
            <p>
            Bio: {bio}
            </p>
            <br></br>
            <img src={avatar}/>
            <br></br>
            Your games:
            <GameList />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      profile: state.profile
    }
  }

export default connect(mapStateToProps)(Profile)