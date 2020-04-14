import React from 'react'
import MeetupCard from './MeetupCard'
import {Card} from 'semantic-ui-react'

const MeetupList = (props) => {

    return (
        <div>
            <Card.Group>
                {props.meetups? props.meetups.map(meetup => <MeetupCard info={meetup} key={meetup.meetup_details.id}/>) : null }
            </Card.Group>
        </div>
    )
}

export default MeetupList