import React from 'react'
import { connect } from 'react-redux'
import { Form, Dropdown } from 'semantic-ui-react'
import { fetchAllUsers, sendInvites } from '../redux/actions'


class InviteForm extends React.Component {

    state = {
        description: "",
    }

    componentDidMount(){
        this.props.getUsers()
        console.log("already attending participants:", this.props.alreadyAttending)
    }

    handleDropdown = (e, {value}) => {
        
        //note: {value} is used with semantic react components. Allows the use of arrays 
        this.setState({
            invited: value  
        })
    }

    inviteForm = () => {

        const allUsers = [...this.props.allUsers];
        const cloneUsers = [];
        let attending = this.props.alreadyAttending;

        //filters users so only people who are not attending can be invited
        const filteredUsers = allUsers.filter( user => {
            return !attending.some( attendee => {
                return attendee.id === user.id
            })
        })

        filteredUsers.forEach(user => {
            let obj = {};
            obj["key"] = user.username
            obj["text"] = user.name
            obj["value"] = user.id
            cloneUsers.push(obj)
        })

        return (
            <div>
                <Form>
                    <Dropdown
                        placeholder='Select Users to Invite'
                        fluid
                        search
                        multiple
                        selection
                        options={cloneUsers}
                        onChange={this.handleDropdown}
                    />
                    <Form.Field>
                        <Form.TextArea inline label='Message' placeholder='Enter your message here' value={this.state.description} onChange={(e) => {this.setState({description: e.target.value})}}/>
                    </Form.Field>
                    <Form.Button onClick={() => {
                        this.props.sendForm(this.state, this.props.meetupDetails, this.props.profile)
                        this.setState({
                            invited: [],
                            description: ""
                        })
                    }}>Send Invitations!</Form.Button>
                </Form>
            </div>
        )
    }

    render(){
        return (
            <div>
                Invite Form

                {this.props.allUsers? this.inviteForm() : this.props.getUsers() }
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        allUsers: state.users,
        profile: state.profile,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchAllUsers()),
        sendForm: (inviteForm, meetupDetails, profile) => dispatch(sendInvites(inviteForm, meetupDetails, profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteForm)