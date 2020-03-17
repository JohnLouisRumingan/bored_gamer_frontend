import React from 'react'
import './css/Navbar.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../redux/actions'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'

class NavBar extends React.Component{

    render(){
    return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div><DrawerToggleButton /*click={this.props.drawerClickHandler}*/ /> </div>
                <div className="spacer"></div>
                <div className="toolbar_logo"><Link to='/'>BGmer</Link></div>
                <div className="toolbar_navigation_items">
                    <ul>
                        {this.props.profile? <li><Link to='/profile'>Profile</Link></li> : <li><Link to='/login'>Login</Link></li>}
                        <li><Link to='/games'>Game Page</Link></li>
                        <li><Link to='/meetups'>Meetups</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        {this.props.profile? <li><Link to='/' onClick={this.props.logout}>Logout</Link></li> : null }
                    </ul>
                </div>
            </nav>
        </header>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      profile: state.profile
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)