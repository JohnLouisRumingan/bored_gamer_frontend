import {combineReducers, /*bindActionCreators*/ } from 'redux';

let initialState = {
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
    },
}



const drawerReducer = (state=initialState.sideDrawerOpen, action) => {
    switch(action.type){
        case "SWITCH_DRAWER":
            return !state;
        case "CLOSE_DRAWER":
            return false;
        default:
            return state;
    }
}

const profileReducer = (state = initialState.profile, action) => {
    switch(action.type){
        case "LOAD_PROFILE":
            return action.payload;
        case "LOGOUT":
            return null 
        default:
            return state;
    }
}

const gamesReducer = (state=initialState.games, action) => {
    switch(action.type){
        case "FETCHED_GAMES":
            return action.payload;
        case "RANDOM_GAME":
            //random games are returned as a single large hash 
            return [action.payload]
        default:
            return state;
    }
}

const meetupReducer = (state=initialState.meetups, action) => {
    switch(action.type){
        case "FETCHED_MEETUPS":
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
        // below currently not used, gets the entire set of meetups again 
        // case "JOINED_MEETUPS":
        //     return state;
        case "MODIFY_MEETUP":
            let newState = [...state]
            newState.forEach((meetup, index) => {
                if(meetup.meetup_details.id === action.payload.meetup_details.id){
                    newState[index] = action.payload
                }
            })
            return newState;
        case "ADD_NEW_EVENT":
            let newEvent = [...state, action.payload]
            return newEvent;
        default:
            return state;
    }
}

const collectionReducer = (state=initialState.gamesInCollection, action) => {
    switch(action.type){
        case "UPDATE_COLLECTION":
            return action.payload
        default:
            return state;
    }
}

const currentDateReducer = (state=initialState.todaysDate, action) => {
    switch(action.type){
        case "TODAYS_DATE":
            return action.payload;
        default: 
            return state;
    }
}

const dateReducer = (state=initialState.dateSelected, action) => {
    switch(action.type){
        case "SELECT_DATE":
            return action.payload

        // make another reducer here for the week. Need this to be able to filter events weekly
        default:
            return state;
    }
}

const detailedGameReducer = (state=initialState.detailedGame, action) => {
    switch(action.type){
        case "UPDATE_DETAILS":
            return action.payload.result[0]
        default:
            return state;
    }
}

const errorReducer = (state=initialState.errorMessage, action) => {
    switch(action.type){
        case "NEW_ERROR":
            return action.payload;
        case "LOGIN_FAILED":
            return "Incorrect Username or Password";
        case "NO_ERRORS":
            return null;
        default:
            return state;
    }
}

const inviteReducer = (state = initialState.invites, action) => {

    switch(action.type){
        case "LOGIN_USER_INVITES":
            return action.allInvites;
        case "NEW_INVITES":
            let newArray = action.newInvites 
            let newState = [...state, ...newArray]
            return newState;
        case "MODIFY_INVITE":
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
        case "INVITE_TOGGLE":
            let newState = state;
            return !newState;
        default:
            return state;
    }
}

const usersReducer = (state = initialState.users, action) => {
    switch(action.type){
        case "UPDATE_ALL_USERS":
            return action.payload;
        default:
            return state;
    }
}

const meetupMenuReducer = (state=initialState.meetupMenu, action) => {
    switch(action.type){
        case "TOGGLE_MEETUP_MENU":
            let newState = {...state};
            newState[action.payload] = !state[action.payload]
            return newState;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
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


export default rootReducer