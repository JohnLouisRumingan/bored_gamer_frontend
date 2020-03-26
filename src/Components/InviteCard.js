import React from 'react'
import {Button} from 'semantic-ui-react'
import { connect } from 'react-redux'

class InviteCard extends React.Component {

    state={
        detailed: false,
    }

    render(){
        let {invite_details:{description, status}, receiver:{username: receiverUsername, name: receiverName, id: receiverID}, 
            inviter:{username: inviterUsername, name: inviterName}, 
            meetup:{id: meetupID, title, date, location, description: meetupDescription}} = this.props.info
    
        return (
            <div>
                From: {inviterUsername} {inviterName}, To: {receiverUsername} {receiverName}
                Event: {title} on {date}
                <Button 
                    onClick={()=>{this.setState({detailed: !this.state.detailed})}}
                    size='small'
                >
                    See details
                </Button>
                <br></br>
                {this.state.detailed? 
                    <div>
                        Message: {description}
                        Meetup details: {meetupDescription}
                        Location: {location}
                        {receiverID === this.props.profile.id && status === 1 ? 
                            <div>
                                <Button color='green'>Accept Invite</Button>
                                <Button color='red'>Decline Invite</Button>
                            </div>
                        : null }
                    </div> 
                : null }
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile 
    }
}

export default connect(mapStateToProps)(InviteCard)