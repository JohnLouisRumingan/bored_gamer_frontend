import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'
import Calendar from '../Components/Calendar/Calendar'
import MeetupDetail from '../Components/MeetupDetail'
import './css/meetup-container.css'
import {Container, Button, Divider, Segment } from 'semantic-ui-react'


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

                Featured Events will go here under a filtered meetup list 
                <Divider horizontal>Upcoming Events </Divider>
                <Switch>
                    <Route 
                        path="/meetups/:meetupId"
                        render={(props) => <MeetupDetail routerProps={props}/>}
                    />
                    <Route exact path='/meetups'component={Calendar}/>  
                </Switch>
            
                Events here will show upcoming week by default. Add Buttons that allow you to see events by clicked date 
                <br></br>
                All meetups will go here under a meetups/all route 
                <br></br><br></br>
                <Container>
                    <MeetupList />
                </Container>

            </Segment>

            
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(MeetupContainer);