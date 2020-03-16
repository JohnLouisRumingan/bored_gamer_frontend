import React from 'react'
import { connect } from 'react-redux'


const MeetupDetail = (props) => {
    
    // console.log("meetup detail props.meetups:", props.meetups)
    // console.log("router prop test:", props.routerProps.match.params.meetupId)
    // console.log("router meetups test:", props.meetups[1])
    // debugger

    console.log(props.detailedMeetup)

    return (
        <div>Meetup details go here
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        detailedMeetup: state.meetups.find(meetup => meetup.meetup_details.id === parseInt(ownProps.routerProps.match.params.meetupId))
        // meetupDetails: state.detailedMeetup
    }
}

export default connect(mapStateToProps)(MeetupDetail)