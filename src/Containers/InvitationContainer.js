import React from 'react'
import { connect } from 'react-redux'
import InviteList from '../Components/InviteList'

const InvitationContainer = () => {

    return (
        <div>
            <InviteList />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(InvitationContainer)