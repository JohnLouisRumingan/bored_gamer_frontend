import React from 'react'
import MeetupCard from './MeetupCard'
import {connect} from 'react-redux'


const MeetupList = (props) => {

    return (
        <div>MeetupList
            
            {props.meetups? props.meetups.map(meetup => <MeetupCard />) : null }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        meetups: state.meetups
    }
}

export default connect(mapStateToProps)(MeetupList)