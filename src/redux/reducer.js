import {combineReducers, bindActionCreators } from 'redux';

let initialState = {
    profile: null,
    games: [],
    gamesInCollection: [],
    meetups: [],
    dateSelected: null,
    todaysDate: null,
    detailedMeetup: null,
}

const profileReducer = (state = initialState.profile, action) => {
    switch(action.type){
        case "LOAD_PROFILE":
            return action.payload;
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
    
})


export default rootReducer