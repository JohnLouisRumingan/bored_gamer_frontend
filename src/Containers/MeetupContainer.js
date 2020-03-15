import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import './css/meetup-container.css'


const MeetupContainer = (props) => {

    return (
        <div className="meetup-container">Meetup Container
            <Switch>
            <Route path="/meetups/new" render={() => <MeetupForm />}/>
            </Switch>

            {props.profile? <Route exact path='/meetups' render={() => <Link to='/meetups/new'>Create a new event!</Link>}></Route> : null}
            
            {/* Remove below once testing complete. Don't want to have to keep logging in while creating the form */}
            <Link to='/meetups/new'>Create a new event!</Link> 
            <MeetupList />
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(MeetupContainer);