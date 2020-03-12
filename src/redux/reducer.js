import {combineReducers, bindActionCreators } from 'redux';

let initialState = {
    profile: null,
    games: [],
    
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





const rootReducer = combineReducers({
    profile: profileReducer,
    games: gamesReducer,
})


export default rootReducer