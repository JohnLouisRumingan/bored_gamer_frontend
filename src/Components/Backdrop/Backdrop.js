import React from 'react'
import './Backdrop.css'
import { connect } from 'react-redux'
import {backdropClick, calendarNullDate } from '../../redux/actions'

const Backdrop = (props) => (

    <div className="backdrop" onClick={()=>props.clickHandler()}>

    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        clickHandler: () => {
            dispatch(backdropClick());
            dispatch(calendarNullDate());
            }
    }
}

export default connect(null, mapDispatchToProps)(Backdrop);