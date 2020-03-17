import React from 'react'
import './SideDrawer.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { logout } from '../../redux/actions'

const SideDrawer = (props) => {

    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = [...drawerClasses, 'open']
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                {!props.profile? 
                    <li><Link to='/login'>Login</Link></li> :
                    <li><Link to='/profile'>Profile</Link></li>
                }
                <li><Link to="/meetups">Meetups</Link></li>
                <li><Link to='/games'>Games</Link></li>
                {props.profile? <li><Link to='/' onClick={props.logoutHandler}>Logout</Link></li> : null }
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {

    return{
        profile: state.profile,
        show: state.sideDrawerOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logoutHandler: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)