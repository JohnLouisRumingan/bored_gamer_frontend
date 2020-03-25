import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { fetchAllUsers, sendInvites } from '../redux/actions'


class InviteForm extends React.Component {

    state ={
        invited: [],
    }

    componentDidMount(){
        this.props.getUsers()
    }

    inviteForm = () => {

        return (
            <div>
                <Form>
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