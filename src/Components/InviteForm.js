import React from 'react'
import { connect } from 'react-redux'
import { Form, Dropdown } from 'semantic-ui-react'
import { fetchAllUsers, sendInvites } from '../redux/actions'


class InviteForm extends React.Component {

    state ={
        invited: [],
    }

    componentDidMount(){
        this.props.getUsers()
        console.log("already attending participants:", this.props.alreadyAttending)
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

        console.log("filtered users:",filteredUsers)

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
                        selection
                        options={cloneUsers}
                    />
                    <Form.Button onClick={() => {this.props.sendForm("form details", this.props.allUsers)}}>Send Invitations!</Form.Button>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchAllUsers()),
        sendForm: (formDetails, users) => dispatch(sendInvites(formDetails, users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteForm)