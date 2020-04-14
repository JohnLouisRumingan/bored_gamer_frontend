import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import Calendar from '../Components/Calendar/Calendar'
import MeetupDetail from '../Components/MeetupDetail'
import '../Components/css/general.css'
import './css/meetup-container.css'
import {Divider, Segment } from 'semantic-ui-react'
import {} from '../redux/actions'


const MeetupContainer = (props) => {

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
                    <Divider horizontal inverted>Featured Events</Divider>
                        <br></br>
                        <MeetupList meetups={props.meetups.filter(meetup => meetup.participants.length > 2 )}/>
                        <br></br>
                    <Divider horizontal inverted>Upcoming Events </Divider>
                    <Switch>
                        <Route 
                            path="/meetups/:meetupId"
                            render={(props) => <MeetupDetail routerProps={props}/>}
                        />
                        <Route exact path='/meetups'render={ () => 
                            <div>
                                <Calendar />
                                <MeetupList meetups={props.meetups.filter(meetup => Date.parse(meetup.meetup_details.date) > Date.parse(new Date()))}/>
                            </div>
                        }/>  
                    </Switch>
                        
                    <br></br>
                    <Divider horizontal inverted>Past Events</Divider>
                    <br></br>
                    <MeetupList meetups={props.meetups.filter(meetup => Date.parse(meetup.meetup_details.date) < Date.parse(new Date()))}/>
                    <br></br><br></br>
                    <Divider horizontal inverted>All Events</Divider>
                    <br></br><br></br>
                    <MeetupList meetups={props.meetups}/>
                    {/* <MeetupList /> */}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => {dispatch()}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetupContainer);