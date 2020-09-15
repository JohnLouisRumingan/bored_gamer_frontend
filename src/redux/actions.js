//place all action creators here 

const URL = "http://localhost:3000/api/v1/" //reinstate this line for development environment
// add URL to any url's for development
// const URL = "https://bored-game-backend.herokuapp.com/" //production URL

function fetchedGames(games) {
    return {type: "FETCHED_GAMES", payload: games}
}

// As of 2020.8.1, the API for board games will be changed to api. instead of www.
// If fetching does not work after this date, check the back-end portion for compatibility.

// number of games fetched from API is 100 by default. Search component does a new fetch of 100 when clicked
function fetchingGames(){
    return (dispatch) => {
        fetch(URL+"games")
        .then(res => res.json())
        .then( games => {
            dispatch(fetchedGames(games))
            fetchingMeetups()
        })
        .catch(errors => errors)
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
            if(reply.user){
                dispatch(loginSuccessful(reply.user))
                dispatch(updateCollection(reply.user_collection))
                dispatch(getInvites(reply.user))
                dispatch(noError())
            }
            else{dispatch(loginFailed())}
        })
    }
}

function updateCollection(collection){
    // console.log(collection)
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

function calendarNullDate(){
    return {type: "NULL_DATE"}
}

function dispatchTodaysDate(day){
    return {type: "TODAYS_DATE", payload: day}
}

function addNewEvent(event){
    return {type: "ADD_NEW_EVENT", payload: event}
}

function newEvent(formDetails, profile, date){
    
    let submitObj = {form: formDetails, profile, date}

    return (dispatch) => {
        fetch(URL+'meetups', {
            method: 'POST',
            body: JSON.stringify(submitObj),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => res.json()).then(event => {
            // console.log("back from the back end:", event)
            dispatch(addNewEvent(event))
            })

    }
    // return {type: "SUBMIT_FORM", payload: formDetails}
}

function drawerClickHandler(){
    return{type:"SWITCH_DRAWER"}
}

function backdropClick(){
    return {type: "CLOSE_DRAWER"}
}

function joinEvent(meetupId, profile){

   return (dispatch) => {fetch(`/meetups/join`, {
        method: 'POST', 
        body: JSON.stringify({user: profile.id, meetup: meetupId}),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(meetups => {
            dispatch(fetchedMeetups(meetups))
        })
   }
}

function updateMeetup(meetupInfo){
    return{type: "MODIFY_MEETUP", payload: meetupInfo}
}

function addGamesToEvent(userID,meetupID, chosenGames){

    // console.log('AddGamesToEventHandlerProp', userID, meetupID, chosenGames)

    return (dispatch) => {fetch(URL+'meetups/addgame', {
        method: 'POST',
        body: JSON.stringify({userID, meetupID, chosenGames}),
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(updatedMeetup => {
            dispatch(updateMeetup(updatedMeetup));
        })
    }
}

function showGameDetails(gameDetails){
    // console.log("show game details", gameDetails)
    return {type: "UPDATE_DETAILS", payload: gameDetails}
}

function getGameDetails(gameID){

    return (dispatch) => {
        fetch(URL+'games/search', {
            method: 'POST',
            body: JSON.stringify({gameID}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch(showGameDetails(data));
        })
    }
}

function randomGame(game){
    return {type: "RANDOM_GAME", payload: game}
}

function submitSearchForm(searchParams){

    return (dispatch) => {
        fetch(URL+'games/search', {
            method: 'POST',
            body: JSON.stringify(searchParams), 
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.random){
                dispatch(randomGame(data.random))
            }
            else{
                dispatch(fetchedGames(data.result))
            }
        })   
    }
}

function createAccount(accountDetails){

    return (dispatch) => {
        fetch(URL+'users', {
            method: 'POST',
            body: JSON.stringify({user: accountDetails}),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            if (result.error){
                dispatch({type: "NEW_ERROR", payload: result.error})
            }
            if (result.user){
                dispatch(loginSuccessful(result.user))
                dispatch(noError())
            }
        })
    }
}

function noError(){
    return {type: "NO_ERRORS"}
}

function updateAllUsers(users){
    return {type: "UPDATE_ALL_USERS", payload: users}
}

function fetchAllUsers(){
    return (dispatch) => {
        fetch(URL+'users')
        .then(res => res.json())
        .then(users => dispatch(updateAllUsers(users)))
    }
}

function inviteToggleHandler(){
    return {type: "INVITE_TOGGLE"}
}

function sendInvites(inviteForm, meetupDetails, profile){

    return(dispatch) => {
        fetch(URL+'invites/create', {
            method: 'POST',
            body: JSON.stringify({description: inviteForm.description, inviteList: inviteForm.invited, meetup: meetupDetails, profile }),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({type: "NEW_INVITES", newInvites: data.invites_sent})
        })



    }
}

function getInvites(profile){

    let profileID = profile.id

    return (dispatch) => {
        fetch(URL+`invites/user/${profileID}`)
        .then(res=> res.json())
        .then(data => {
            // console.log(data)
            dispatch({type: "LOGIN_USER_INVITES", allInvites: data.users_invites})
        })
    }
}

function updateInvite(inviteInfo){
    return {type: "MODIFY_INVITE", payload: inviteInfo}
}

function respondToInvite(meetupID, profileID, inviteID, response){

    return (dispatch) => {
        fetch(URL+'invites/reply', {
            method: 'POST',
            body: JSON.stringify({meetupID, profileID, inviteID, response}),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(updateMeetup(data.meetup[0]))
            dispatch(updateInvite(data.invite[0]))
        })
    }
}

function meetupEventToggler(menu){
    return {type: "TOGGLE_MEETUP_MENU", payload: menu}
}

export {fetchedMeetups, fetchingMeetups, fetchedGames, fetchingGames, getGameDetails, showGameDetails,
    login, logout, addToCollection,
    calendarDateSelect, dispatchTodaysDate, calendarNullDate,
    newEvent, joinEvent, addGamesToEvent, 
    drawerClickHandler, backdropClick, 
    submitSearchForm, createAccount,
    inviteToggleHandler, fetchAllUsers, sendInvites,
    getInvites, respondToInvite, meetupEventToggler,
    };