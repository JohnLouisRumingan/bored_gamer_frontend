import React from 'react'
import './Backdrop.css'
import { connect } from 'react-redux'
import {backdropClick} from '../../redux/actions'

const Backdrop = (props) => (

    <div className="backdrop" onClick={()=>props.clickHandler()}>

    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        clickHandler: () => dispatch(backdropClick())
    }
}

export default connect(null, mapDispatchToProps)(Backdrop);