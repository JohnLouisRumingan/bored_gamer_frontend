import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GameList from '../Components/GameList'
import {joinEvent} from '../redux/actions'
import GameAddForm from '../Components/GameAddForm'


const MeetupDetail = (props) => {

    const meetupInfo = (details) => {

        if(details){
            let {meetup_details:{id, title, date, location, other_games_allowed}, host:{name, host_id, /*username, bio, avatar*/}, participants, collection} = details //props.detailedMeetup

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
                        {participants.map(participant => <span key={participant.name}>{participant.name}<br></br></span>)}
                        <br></br>
                        {(props.profile && participants.some( participant => participant.id === props.profile.id))?
                            <div>
                                <Button onClick={() => props.joinEvent(id, props.profile)} icon labelPosition='left'><Icon name="remove user"/>Leave this event</Button> 
                                <br></br>
                                <Button><Icon name='users'/>Invite another user</Button>
                                {/* add result here depending on if user found or not found  */}
                                {props.error? <Button disabled color='red'>{props.error}</Button> : null }
                            </div>
                            : (props.profile) ?
                        <Button onClick={() => props.joinEvent(id, props.profile)} icon labelPosition='left'><Icon name="add user"/>Join this event</Button> 
                            : null
                        }
                    
                    </p>
                    <br></br>
                    {other_games_allowed? <Button disabled color='green'>Bring more games!</Button>  : <Button disabled color='orange'>Only listed games</Button> }
                    <br></br>
                    {((props.profile && participants.some( participant => participant.id === props.profile.id) && other_games_allowed) || (props.profile && props.profile.id=== host_id))?
                        <div>
                            Add or remove your games:
                            <GameAddForm meetup_id={id}/>
                        </div>
                        :null
                    }
                    <br></br>
                    Games in this event:
                    <br></br>
                    <GameList source={"/meetups"} /*games={collection.map(game => game.game)}*/ collection={collection}/>

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
        detailedMeetup: state.meetups.find(meetup => meetup.meetup_details.id === parseInt(ownProps.routerProps.match.params.meetupId)),
        allMeetups: state.meetups,
        error: state.errorMessage
        // meetupDetails: state.detailedMeetup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinEvent: (meetupId, profile) => {dispatch(joinEvent(meetupId, profile))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetupDetail)