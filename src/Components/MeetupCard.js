import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const MeetupCard = (props) => {

    console.log("meetup card info:", props.info)
    let {meetup_details:{title, location, other_games_allowed, date, id}} = props.info 
    let {host: {username, name,}} = props.info

    return (
        <div className="meetup-card">
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>Host: {username}{name? ` - ${name}` : null}</Card.Meta>
                    <Card.Meta>Location: {location}</Card.Meta>
                    <Card.Meta>{date}</Card.Meta>
                    <br></br>
                    <Card.Content extra>
                        {other_games_allowed? <Button basic color='green' disabled>Other games allowed</Button> : 
                        <Button basic color='orange' disabled>Listed games only</Button>}
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={`/meetups/${id}`}>
                            <Button size="mini">More Details</Button>
                        </Link>
                    </Card.Content>
                </Card.Content>
            </Card>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(null, mapDispatchToProps)(MeetupCard)