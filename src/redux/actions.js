//place all action creators here 

const URL = "http://localhost:3000/api/v1/"

function fetchedGames(games) {
    return {type: "FETCHED_GAMES", payload: games}
}


function fetchingGames(){
    return (dispatch) => {
        fetch(URL+"games")
        .then(res => res.json())
        .then( games => {
            dispatch(fetchedGames(games))
            fetchingMeetups()
        })
    }
}

function fetchedMeetups(meetups) {
    return {type: "FETCHED_MEETUPS", payload: meetups}
}

function fetchingMeetups(){
    return (dispatch) => {
        fetch(URL+"meetups/detailed")
        .then(res => res.json())
        .then(meetups => {
            dispatch(fetchedMeetups(meetups))
        })
    }
}

function logout(){
    return {type: "LOGOUT"}
}

function loginSuccessful(profile){
    return {type: "LOAD_PROFILE", payload: profile}
}

function loginFailed(){
    return {type: "LOGIN_FAILED"}
}


function login(username, password){

    // similar to fetching games, if return is true, send the profile. If it's false, return an action 
    // that can be used for something else 

    // return {type: "LOGIN_SUCCESSFUL", payload: profile}
    console.log("Inside of action login:", username, password)
    return (dispatch) => {
        fetch(URL+"login", {
            method: 'POST', //syntactic sugar: {user: {username, password}} instead 
            body: JSON.stringify({user: {username: username, password:password}}),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(reply => {
            //if-else here. If login not found, send a message and kick back to login page
            console.log("reply from login: ", reply)
            if(reply.user){
                dispatch(loginSuccessful(reply.user))
                dispatch(updateCollection(reply.user_collection))
            }
            else{dispatch(loginFailed())}
        })
    }
}

function updateCollection(collection){
    console.log(collection)
    return {type: "UPDATE_COLLECTION", payload: collection}
}

function addToCollection(gameInfo, profile, relationshipToUpdate){

    //sends fetch request with updated collection parameters to the back end. Back end returns an AoH of the user's collection
    let {game_id, id, name, year_published, min_players, max_players, description, image_url, min_playtime, max_playtime} = gameInfo
    
    if (game_id){
        id = game_id;
    }
    //for db purposes, backend has id and game_id, game_id = id from API. Refactor to only have one ID in the future 
    //this allows user to favorite/own games from their profile page
    
    return (dispatch) => {
        fetch(URL+"collections/create", {
            method: 'POST',
            body: JSON.stringify({
                collection: {
                    user_id: profile.id, game_id: id, name, year_published, min_players, max_players, description, image_url, min_playtime, max_playtime, updated: relationshipToUpdate
                }
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json()).then(collection => dispatch(updateCollection(collection["user_collection"])))
    }
}

function calendarDateSelect(day){
    return {type: "SELECT_DATE", payload: day}
}

function dispatchTodaysDate(day){
    return {type: "TODAYS_DATE", payload: day}
}

function newEvent(formDetails, profile, date){

    
    let submitObj = {form: formDetails, profile, date}
    console.log("new event submitted!", submitObj)

    
    return (dispatch) => {
        fetch(URL+'meetups', {
            method: 'POST',
            body: JSON.stringify(submitObj),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => res.json()).then(data => console.log("back from the back end:",data))

    }
    // return {type: "SUBMIT_FORM", payload: formDetails}
}

// function detailedMeetup(info){
//     return {type: "UPDATE_DETAILED_MEETUP", info}
// }


export {fetchingMeetups, fetchingGames, login, logout, addToCollection, calendarDateSelect, dispatchTodaysDate, newEvent, /*detailedMeetup*/ };