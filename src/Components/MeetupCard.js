import React from 'react'
import { Button, Card, Label, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const MeetupCard = (props) => {

    let {meetup_details:{title, location, other_games_allowed, date, id}} = props.info 
    let {host: { name,}} = props.info
    let {participants} = props.info
    
    console.log(date.toString().substring(0,10))
    return (
        <Card>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>Host: {name? ` - ${name}` : null}</Card.Meta>
                <Card.Meta>Location: {location}</Card.Meta>
                <Card.Meta>{date.toString().substring(0,10)}</Card.Meta>
                <br></br>
                <Label>
                    <Icon name="group" color='pink'/>{participants.length}
                </Label>
                <Card.Content extra>
                    {other_games_allowed? <Button color='green' disabled compact size='mini'>Other games allowed</Button> : 
                    <Button color='orange' disabled compact size='mini'>Listed games only</Button>}
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/meetups/${id}`}>
                        <Button size="mini">More Details</Button>
                    </Link>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

//formerly used detaildMeetup dispatch as a more details onClick event handler

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // detailedMeetup: (info) => dispatch(detailedMeetup(info))
//     }
// }


// export default withRouter(connect(null, mapDispatchToProps)(MeetupCard))

export default MeetupCard