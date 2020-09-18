// place all action types here. Moved here as project grows larger:
/*
It helps keep the naming consistent because all action types are gathered in a single place.
Sometimes you want to see all existing actions before working on a new feature. It may be that the action you need was already added by somebody on the team, but you didn't know.
The list of action types that were added, removed, and changed in a Pull Request helps everyone on the team keep track of scope and implementation of new features.
If you make a typo when importing an action constant, you will get undefined. Redux will immediately throw when dispatching such an action, and you'll find the mistake sooner.
*/

const FETCHED_GAMES = "FETCHED_GAMES";
const FETCHED_MEETUPS = "FETCHED_MEETUPS";
const LOGOUT = "LOGOUT";
const LOAD_PROFILE = "LOAD_PROFILE";
const UPDATE_COLLECTION = "UPDATE_COLLECTION";
const SELECT_DATE = "SELECT_DATE";
const NULL_DATE = "NULL_DATE";
const TODAYS_DATE = "TODAYS_DATE";
const ADD_NEW_EVENT = "ADD_NEW_EVENT";
const SWITCH_DRAWER = "SWITCH_DRAWER";
const CLOSE_DRAWER = "CLOSE_DRAWER";
const MODIFY_MEETUP = "MODIFY_MEETUP";
const UPDATE_GAME_DETAILS = "UPDATE_GAME_DETAILS";
const SHOW_RANDOM_GAME = "SHOW_RANDOM_GAME";
const RETURN_ERROR = "RETURN_ERROR";
const NO_ERRORS = "NO_ERRORS";

export {
    FETCHED_GAMES, FETCHED_MEETUPS, 
    LOGOUT, LOAD_PROFILE,
    UPDATE_COLLECTION, 
    SELECT_DATE, NULL_DATE, TODAYS_DATE,
    ADD_NEW_EVENT, 
    SWITCH_DRAWER, CLOSE_DRAWER, 
    MODIFY_MEETUP, UPDATE_GAME_DETAILS,
    SHOW_RANDOM_GAME, 
    RETURN_ERROR, NO_ERRORS,

};