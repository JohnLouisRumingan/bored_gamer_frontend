import React from 'react'
// import '../css/Navbar.css'
import {Link} from 'react-router-dom';

class NavBar extends React.Component{

    render(){
    return(
        <header>
            <nav>
                <div>Drawer Toggle button goes here </div>
                <div className="spacer"></div>
                <div className="toolbar_logo"><Link to='/'>BGmer</Link></div>
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/games'>Game Page</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
    }
}

export default NavBar