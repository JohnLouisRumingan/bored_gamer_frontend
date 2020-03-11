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
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
    }
}

export default NavBar