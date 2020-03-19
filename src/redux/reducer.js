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
    // detailedMeetup: null,
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
        default:
            return state;
    }
}

const meetupReducer = (state=initialState.meetups, action) => {
    switch(action.type){
        case "FETCHED_MEETUPS":
            return action.payload;
        // below currently not used, gets the entire set of meetups again 
        // case "JOINED_MEETUPS":
        //     return state;
        case "MODIFY_MEETUP":
            let newState = [...state]
            newState.forEach((meetup, index) => {
                if(meetup.meetup_details.id === action.payload.meetup_details.id){
                    state[index] = action.payload
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

// const detailedMeetupReducer = (state=initialState.detailedMeetup, action) => {
//     switch(action.type){
//         case "UPDATE_DETAILED_MEETUP":
//             return action.payload;
//         default:
//             return state;
//     }
// }

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
    // detailedMeetup: detailedMeetupReducer,
    
})


export default rootReducer