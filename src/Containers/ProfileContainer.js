import React from 'react'
import { connect } from 'react-redux'
import GameList from '../Components/GameList'
import {Segment, Divider, Grid, Container} from 'semantic-ui-react'


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
                <br></br>
                <img src={avatar} alt={username + bio }/>
                <br></br>
              </Grid.Column>
              <Grid.Column>
                Your games:
                <Container>
                  <GameList source={"/profile"}/>
                </Container>
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