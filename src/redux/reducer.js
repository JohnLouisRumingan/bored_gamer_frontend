import {combineReducers, bindActionCreators } from 'redux';

let initialState = {
    count: 1,
    profile: {},
}

const profileReducer = (state = initialState.profile) => {
    switch(action.type){

        default:
            return state;
    }
}



const rootReducer = combineReducers({
    profile: profileReducer,
})


export default rootReducer