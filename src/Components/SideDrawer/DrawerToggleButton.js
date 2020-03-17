import React from 'react';
import './DrawerToggleButton.css';
import {drawerClickHandler} from '../../redux/actions'
import { connect } from 'react-redux'

const drawerToggleButton = props => {

    return (
        <div className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>   
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        click: () => dispatch(drawerClickHandler())
    }
}

export default connect(null, mapDispatchToProps)(drawerToggleButton)