import {combineReducers } from 'redux'
import * as types from './actionTypes'

const initialState = {
    profile: null,
    games: [],
    gamesInCollection: [],
    meetups: [],
    dateSelected: null,
    todaysDate: null,
    sideDrawerOpen: false,
    search: [],
    detailedGame: null,
    errorMessage: null,
    invites: [],
    inviteToggle: false,
    users: [],
    meetupMenu: {
        pastEvents: false,
        allEvents: false,
        calendar: false,
        upcomingEvents: false,
        featuredEvents: true,
        meetupsOnDate: false,
    },
}



const drawerReducer = (state=initialState.sideDrawerOpen, action) => {
    switch(action.type){
        case types.SWITCH_DRAWER:
            return !state;
        case types.CLOSE_DRAWER:
            return false;
        default:
            return state;
    }
}

const profileReducer = (state = initialState.profile, action) => {
    switch(action.type){
        case types.LOAD_PROFILE:
            return action.payload;
        default:
            return state;
    }
}

const gamesReducer = (state=initialState.games, action) => {
    switch(action.type){
        case types.FETCHED_GAMES:
            return action.payload;
        case types.SHOW_RANDOM_GAME:
            return [action.payload]
        default:
            return state;
    }
}

const meetupReducer = (state=initialState.meetups, action) => {
    switch(action.type){
        case types.FETCHED_MEETUPS:
            let meetups = action.payload;
            meetups.sort((a,b)=>{
                if(a.meetup_details.date < b.meetup_details.date){
                    return -1;
                }
                if(a.meetup_details.date > b.meetup_details.date){
                    return 1;
                }
                return 0;
            })
            return meetups;
        case types.MODIFY_MEETUP:
            let modifiedMeetups = [...state]
            let foundIndex = modifiedMeetups.findIndex(meetup => meetup.meetup_details.id === action.updatedMeetup.meetup_details.id)
            modifiedMeetups[foundIndex] = action.updatedMeetup;
            return modifiedMeetups;
        case types.ADD_NEW_EVENT:
            let newEvent = [...state, action.payload]
            return newEvent;
        default:
            return state;
    }
}

const collectionReducer = (state=initialState.gamesInCollection, action) => {
    switch(action.type){
        case types.UPDATE_COLLECTION:
            return action.payload
        default:
            return state;
    }
}

const currentDateReducer = (state=initialState.todaysDate, action) => {
    switch(action.type){
        case types.TODAYS_DATE:
            return action.payload;
        default: 
            return state;
    }
}

const dateReducer = (state=initialState.dateSelected, action) => {
    switch(action.type){
        case types.SELECT_DATE:
            return action.payload
        // make another reducer here for the week. Need this to be able to filter events weekly
        case types.NULL_DATE:
            return null;
        default:
            return state;
    }
}

const detailedGameReducer = (state=initialState.detailedGame, action) => {
    switch(action.type){
        case types.UPDATE_GAME_DETAILS:
            return action.payload.result[0]
        default:
            return state;
    }
}

const errorReducer = (state=initialState.errorMessage, action) => {
    switch(action.type){
        case types.RETURN_ERROR:
            return action.errorMessage;
        case types.NO_ERRORS:
            return null;
        default:
            return state;
    }
}

const inviteReducer = (state = initialState.invites, action) => {

    // new feature to be added later:
    // currently only one mailbox. will have to create two mailboxes and have separate invite lists for sent/received
    // UPDATE_INVITES currently an action when a user SENDS invites. will have to refactor and create a new reducer
    switch(action.type){
        case types.LOGIN_USER_INVITES:
            return action.allInvites;
        case types.UPDATE_INVITES:
            let newArray = action.newInvites 
            let newState = [...state, ...newArray]
            return newState;
        case types.MODIFY_INVITE:
            let updateInviteState = [...state]
            updateInviteState.forEach((invite, index) => {
                if(invite.invite_details.id === action.payload.invite_details.id){
                    updateInviteState[index] = action.payload
                }
            })
            return updateInviteState;
        default:
            return state;
    }
}

const inviteToggleReducer = (state = initialState.inviteToggle, action) => {
    switch(action.type){
        case types.INVITE_TOGGLE:
            let newState = state;
            return !newState;
        default:
            return state;
    }
}

const usersReducer = (state = initialState.users, action) => {
    switch(action.type){
        case types.UPDATE_ALL_USERS:
            return action.users;
        default:
            return state;
    }
}

const meetupMenuReducer = (state=initialState.meetupMenu, action) => {
    switch(action.type){
        case types.TOGGLE_MEETUP_MENU:
            let newState = {...state};
            newState[action.payload] = !state[action.payload]
            return newState;
        default:
            return state;
    }
}

const appReducer = combineReducers({
    profile: profileReducer,
    games: gamesReducer,
    gamesInCollection: collectionReducer,
    dateSelected: dateReducer,
    todaysDate: currentDateReducer,
    meetups: meetupReducer,
    sideDrawerOpen: drawerReducer,
    detailedGame: detailedGameReducer,
    errorMessage: errorReducer,
    invites: inviteReducer,
    inviteToggle: inviteToggleReducer,
    users: usersReducer,
    meetupMenu: meetupMenuReducer,
})

const rootReducer = (state, action) => {

    if(action.type === types.LOGOUT){
        state = undefined;
    }

    return appReducer(state, action);
}


export default rootReducer