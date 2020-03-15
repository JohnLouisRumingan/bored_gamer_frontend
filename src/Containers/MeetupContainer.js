import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import MeetupList from '../Components/MeetupList'
import MeetupForm from '../Components/MeetupForm'


const MeetupContainer = (props) => {

    return (
        <div>Meetup Container
            <Switch>
            <Route path="/meetups/new" render={() => <MeetupForm />}/>
            </Switch>

            {props.profile? <Route exact path='/meetups' render={() => <Link to='/meetups/new'>Create a new event!</Link>}></Route> : null}
            
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