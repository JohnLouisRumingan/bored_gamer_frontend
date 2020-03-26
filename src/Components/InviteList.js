import React from 'react'
import { connect } from 'react-redux'
import InviteCard from '../Components/InviteCard'

const InviteList = (props) => {

    return (
        <div>
            {props.invites.map(invite => <InviteCard  info={invite} key={invite}/> )}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        invites: state.invites
    }
}
export default connect(mapStateToProps)(InviteList)