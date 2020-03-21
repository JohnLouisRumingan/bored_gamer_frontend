import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import Calendar from '../Components/Calendar/Calendar'
import MeetupDetail from '../Components/MeetupDetail'
import './css/meetup-container.css'
import {Divider, Segment } from 'semantic-ui-react'


const MeetupContainer = (props) => {

    return (
        <div className="meetup-container">
            
            <Segment basic textAlign='center'>
                <Divider horizontal>Create Event</Divider>
                <Switch>
                    <Route path="/meetups/new" render={() => 
                        <div>
                            <MeetupForm />
                            <Calendar />
                        </div>
                    }/>
                </Switch>
                {props.profile? <Route exact path='/meetups' render={() => <Link to='/meetups/new'>Create a new event!</Link>}></Route> : "Create an account to make an event!"}
                {/* Add below for testing. Don't want to have to keep logging in while creating the form */}
                {/* <Link to='/meetups/new'>Create a new event!</Link>  */}
                <Divider horizontal>Featured Events</Divider>
                    <br></br>
                    <MeetupList meetups={props.meetups.filter(meetup => meetup.participants.length > 2 )}/>
                    <br></br>
                <Divider horizontal>Upcoming Events </Divider>
                <Switch>
                    <Route 
                        path="/meetups/:meetupId"
                        render={(props) => <MeetupDetail routerProps={props}/>}
                    />
                    <Route exact path='/meetups'component={Calendar}/>  
                </Switch>
                    
                <br></br>
                <br></br><br></br>
                <Divider horizontal>All Events</Divider>
                <br></br><br></br>
                <MeetupList meetups={props.meetups}/>
            </Segment>

            
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        meetups: state.meetups.sort((a,b)=>{
            if(a.meetup_details.date < b.meetup_details.date){
                return -1;
            }
            if(a.meetup_details.date > b.meetup_details.date){
                return 1;
            }
            return 0;
        }),
    }
}

export default connect(mapStateToProps)(MeetupContainer);