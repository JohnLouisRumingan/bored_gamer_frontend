import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


const MeetupCard = (props) => {

    console.log("meetup card info:", props.info)
    let {meetup_details:{title, location, other_games_allowed, date}} = props.info 
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
                        {other_games_allowed? <Button basic color='green'>Other games allowed</Button> : 
                        <Button>Listed games only</Button>}
                    </Card.Content>
                </Card.Content>
            </Card>
        </div>
    )
}


export default MeetupCard 