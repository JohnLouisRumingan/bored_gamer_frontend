import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import Calendar from '../Components/Calendar/Calendar'
import './css/meetup-container.css'


const MeetupContainer = (props) => {

    return (
        <div className="meetup-container">
            <Calendar />
            
            <Switch>
            <Route path="/meetups/new" render={() => <MeetupForm />}/>
            </Switch>
            <MeetupList />

            {props.profile? <Route exact path='/meetups' render={() => <Link to='/meetups/new'>Create a new event!</Link>}></Route> : "Create an account to make an event!"}
            
            {/* Add below for testing. Don't want to have to keep logging in while creating the form */}
            {/* <Link to='/meetups/new'>Create a new event!</Link>  */}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(MeetupContainer);