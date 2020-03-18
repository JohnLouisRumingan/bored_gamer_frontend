import React from 'react'
import { Button, Card, Label, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { detailedMeetup } from '../redux/actions'


const MeetupCard = (props) => {

    console.log("meetup card info:", props.info)
    let {meetup_details:{title, location, other_games_allowed, date, id}} = props.info 
    let {host: {username, name,}} = props.info
    let {participants} = props.info
    
    return (
        <div className="meetup-card">
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>Host: {name? ` - ${name}` : null}</Card.Meta>
                    <Card.Meta>Location: {location}</Card.Meta>
                    <Card.Meta>{date}</Card.Meta>
                    <br></br>
                    <Label>
                        <Icon name="group"/>{participants.length}
                    </Label>
                    <br></br>
                    <Card.Content extra>
                        {other_games_allowed? <Button color='green' disabled compact>Other games allowed</Button> : 
                        <Button color='orange' disabled compact>Listed games only</Button>}
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={`/meetups/${id}`}>
                            <Button size="mini" /*onClick={props.detailedMeetup(props.info)}*/ >More Details</Button>
                        </Link>
                    </Card.Content>
                </Card.Content>
            </Card>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // detailedMeetup: (info) => dispatch(detailedMeetup(info))
    }
}


export default withRouter(connect(null, mapDispatchToProps)(MeetupCard))