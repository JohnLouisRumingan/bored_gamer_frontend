import React from 'react'
import { connect } from 'react-redux'

const upcomingEvents = (props) => {

    return (
        <div>Upcoming events 

            {props.profile? props.yourEvents.filter(event => event.participants.includes(props.profile) || event.host.includes(props.profile)) : null}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        yourEvents: state.meetups
        // events: state.meetups.filter(event => event.participants.includes(props.profile) || event.host.includes(props.profile))
    }
}

export default connect(mapStateToProps)(upcomingEvents)