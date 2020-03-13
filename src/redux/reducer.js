import {combineReducers, bindActionCreators } from 'redux';

let initialState = {
    profile: null,
    games: [],
    gamesInCollection: [],
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

const collectionReducer = (state=initialState.gamesInCollection, action) => {
    switch(action.type){
        case "UPDATE_COLLECTION":
            return action.payload
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    profile: profileReducer,
    games: gamesReducer,
    gamesInCollection: collectionReducer,
})


export default rootReducer