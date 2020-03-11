import {combineReducers, bindActionCreators } from 'redux';

let initialState = {
    profile: {},
    games: []
}

const profileReducer = (state = initialState.profile, action) => {
    switch(action.type){

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
})


export default rootReducer