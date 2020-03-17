import React from 'react'
import { connect } from 'react-redux'
import GameList from '../Components/GameList'
import {Segment, Divider, Grid, Container, Card, Image} from 'semantic-ui-react'
import './css/profile-container.css'


const Profile = (props) => {

    let {username, name, bio, avatar} = props.profile

    return (
        <div>
          <Segment>
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                Profile page
                Username: {username}
                <br></br>
                Name: {name}
                <br></br>
                <p>
                Bio: {bio}
                </p>
                {avatar? <Image src={avatar} alt={username + bio } size='medium'/> : null }
                <br></br>
                <p>
                  Games owned: {props.games.filter(game => game.owned===true).length}
                  <br></br>
                  Games favorited: {props.games.filter(game => game.favorite===true).length}
                </p>
              </Grid.Column>
              <Grid.Column >
                <div className='profile-games'>
                  Your games:
                  <Container>
                    <GameList source={"/profile"}/>
                  </Container>
                </div>
              </Grid.Column>
            </Grid>
            <Divider vertical>Games</Divider>
          </Segment>
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