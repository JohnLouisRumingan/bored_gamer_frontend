import React from 'react'
import { connect } from 'react-redux'

const InvitationContainer = () => {

    return (
        <div>
            Invitations container
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        invites: state.invites,
    }
}

export default connect(mapStateToProps)(InvitationContainer)