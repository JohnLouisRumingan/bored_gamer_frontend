import React from 'react'
import './css/Navbar.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logout} from '../redux/actions'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import {Icon} from 'semantic-ui-react'

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
                        {this.props.profile? <li><Link to='/profile'><Icon name="id card"/>Profile</Link></li> : <li><Link to='/login'><Icon name="sign in"/><br></br>Login</Link></li>}
                        <li><Link to='/games'><Icon name="chess"/><br></br>Games</Link></li>
                        <li><Link to='/meetups'><Icon name="group" /><br></br>Events</Link></li>
                        <li><Link to='/about'><Icon name="help" /><br></br>About</Link></li>
                        {this.props.profile? <li><Link to='/' onClick={this.props.logout}><Icon name="sign out"/><br></br>Logout</Link></li> : null }
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