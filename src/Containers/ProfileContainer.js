import React from 'react'
import { connect } from 'react-redux'
import GameList from '../Components/GameList'
import {Segment, Divider, Grid, Container, Card, Image} from 'semantic-ui-react'
import './css/profile-container.css'


const Profile = (props) => {

    let {username, name, bio, avatar} = props.profile

    return (
      <div className='background-general'>
        <div className='profile-container'>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                {avatar? <Image src={avatar} alt={username + bio } size='medium'/> : null }
              </Grid.Column>
              <Grid.Column >
                Username: {username}
                <br></br>
                Name: {name}
                <br></br>
                <p>
                Bio: {bio}
                </p>
                <br></br>
                <p>
                  Games owned: {props.games.filter(game => game.owned===true).length}
                  <br></br>
                  Games favorited: {props.games.filter(game => game.favorite===true).length}
                </p>
              </Grid.Column>
            </Grid>
            <Divider vertical>Profile</Divider>
          </Segment>
          <Divider horizontal> Shelf </Divider>
                <div className='profile-games'>
                    <GameList source={"/profile"}/>
                </div>
        </div>
        <div className='additional-background'>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      profile: state.profile, 
      games: state.gamesInCollection
    }
  }

export default connect(mapStateToProps)(Profile)