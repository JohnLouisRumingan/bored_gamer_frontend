import React from 'react'
import { connect } from 'react-redux'
import { Card, Segment, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GameList from '../Components/GameList'


const MeetupDetail = (props) => {
    
    // console.log("meetup detail props.meetups:", props.meetups)
    // console.log("router prop test:", props.routerProps.match.params.meetupId)
    // console.log("router meetups test:", props.meetups[1])
    // debugger

    console.log(props.detailedMeetup)

    const meetupInfo = (details) => {

        if(details){
            let {meetup_details:{title, date, location, /*other_games_allowed*/}, host:{name, /*username, bio, avatar*/}, participants, collection} = props.detailedMeetup
            
            return (
                <div>
                    <Segment>
                    <Header>{title}</Header>
                    {date}
                    <br></br>
                    Location: {location}
                    <p>
                    Host: {name}
                    </p>
                    Participants:
                    <p>
                        {participants.map(participant => participant.name )}
                        <br></br>
                        {props.profile? <div><Icon name="add user"/>Join this event </div> : null}
                    </p>
                    <br></br>
                    Games in this event:
                    <br></br>
                    <GameList source={"/meetups"} games={collection.map(game => game.game)}/>
                    <br></br>
                    <Link to='/meetups'>Close details and view Calendar</Link>
                    </Segment>
                </div>
            )
        }
    }

    return (
        <div>
            {props.detailedMeetup? meetupInfo(props.detailedMeetup) : null }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.profile,
        detailedMeetup: state.meetups.find(meetup => meetup.meetup_details.id === parseInt(ownProps.routerProps.match.params.meetupId))
        // meetupDetails: state.detailedMeetup
    }
}

export default connect(mapStateToProps)(MeetupDetail)