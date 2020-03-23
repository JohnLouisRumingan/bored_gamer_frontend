import React from 'react'
import { connect } from 'react-redux'
import MeetupList from '../Components/MeetupList'
import { Container } from 'semantic-ui-react'

const upcomingEvents = (props) => {

    console.log("upcoming events profile:", props.profile, "yourEvents:", props.yourEvents)

    return (
        <div>Upcoming events 
            <Container>
            Your upcoming events in which you are are a host:
            <br></br><br></br>
            <MeetupList meetups={props.yourHosting}/>

            Your upcoming events in which you are a participant:
            <MeetupList meetups={props.yourEvents} />
            </Container>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        yourEvents: state.meetups.filter(event => event.participants.includes(state.profile) 
            && (Date.parse(event.meetup_details.date)) > Date.parse(Date.now()) ),
        yourHosting: state.meetups.filter( event => event.host.id === state.profile.id )
            // && (Date.parse(event.meetup_details.date)) > Date.parse(Date.now())),
        // events: state.meetups.filter(event => event.participants.includes(props.profile) || event.host.includes(props.profile))
    }
}

export default connect(mapStateToProps)(upcomingEvents)