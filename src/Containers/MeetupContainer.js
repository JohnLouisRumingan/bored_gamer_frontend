import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import Calendar from '../Components/Calendar/Calendar'
import MeetupDetail from '../Components/MeetupDetail'
import Backdrop from '../Components/Backdrop/Backdrop'
import '../Components/css/general.css'
import './css/meetup-container.css'
import {Divider, Segment, Button } from 'semantic-ui-react'
import { meetupEventToggler, calendarNullDate } from '../redux/actions'



const MeetupContainer = (props) => {

    //conditionally renders meetups on selected date. If no meetups found via filter, returns "no results"
    const dateOfMeetupsConditional = (props) => {

        let filteredMeetups = props.meetups.filter(meetup => 
            meetup.meetup_details.date.toString().substring(0,10) === props.dateSelected.toISOString().substring(0,10))

        if(filteredMeetups.length > 0){
            return (
                <div className='selected-date-meetups'>
                    Meetups on {props.dateSelected.toISOString().substring(0,10)} : 
                    <br></br>
                    <MeetupList meetups={filteredMeetups}/> 
                </div>
            )
        }
        else{
            return (
                <div className='selected-date-meetups'>
                    No meetups found for {props.dateSelected.toISOString().substring(0,10)} 
                </div>
            )
        }
    }

    //event dates are stored in ISO format in db.  Date selected is using Date() so it displays Day Month DD format.
    const dateOfMeetups = (props) => {
        if(props.dateSelected){
            return (
                <div>
                    {dateOfMeetupsConditional(props)}
                    <div className='selected-date-backdrop'>
                        <Backdrop />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='background-general'>
            <div className="meetup-container">
                <Segment basic textAlign='center'>
                    <Divider horizontal inverted>Create Event</Divider>
                    <Switch>
                        <Route path="/meetups/new" render={() => 
                            <div>
                                <MeetupForm />
                                <Calendar />
                            </div>
                        }/>
                    </Switch>
                    {props.profile? <Route path='/meetups' render={() => <Link to='/meetups/new'>Create a new event!</Link>}></Route> : "Create an account to make an event!"}
                    
                    
                    <Switch>
                        <Route 
                            path="/meetups/:meetupId"
                            render={(props) => (
                                <div className='meetup-details'>
                                    <Divider horizontal inverted> Meetup Details: </Divider>
                                    <MeetupDetail routerProps={props}/>
                                </div>
                            )}
                        />
                        <Route exact path='/meetups'render={ () => 
                            <div>
                                {dateOfMeetups(props)}
                                <Divider horizontal inverted> Calendar </Divider>
                                    <Calendar />
                                <Divider horizontal inverted>Featured Events</Divider>
                                    <MeetupList meetups={props.meetups.filter(meetup => meetup.participants.length > 2 && Date.parse(meetup.meetup_details.date) > Date.parse(new Date()) )}/>
                            </div>
                        }/>  
                    </Switch>
                        <Divider horizontal inverted> Upcoming Events </Divider>
                            <MeetupList meetups={props.meetups.filter(meetup => Date.parse(meetup.meetup_details.date) > Date.parse(new Date()) )}/>
                    <br></br>
                    <Divider horizontal inverted>Past Events</Divider>
                        <Button onClick={() => {props.menuToggle("pastEvents")}}>{props.menu.pastEvents? "Hide" : "Show"} Past Events</Button>
                        <br></br>
                        {props.menu.pastEvents? <MeetupList meetups={props.meetups.filter(meetup => Date.parse(meetup.meetup_details.date) < Date.parse(new Date()))}/> 
                         : null }
                        
                    <br></br><br></br>
                    <Divider horizontal inverted>All Events</Divider>
                    <Button onClick={() => {props.menuToggle("allEvents")}}>{props.menu.allEvents? "Hide" : "Show "} All Events</Button>
                        <br></br>
                        {props.menu.allEvents? <MeetupList meetups={props.meetups}/> : null }
                </Segment>     
            </div>
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
        menu: state.meetupMenu,
        dateSelected: state.dateSelected,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuToggle: (choice) => {dispatch(meetupEventToggler(choice))},
        resetCalendar: () => {dispatch(calendarNullDate())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetupContainer);