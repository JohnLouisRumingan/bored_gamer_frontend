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
        })
    }
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
            //if-else here. If login not found, send a message and kick back to 
            console.log("reply from login: ", reply)
            if(reply.user){dispatch(loginSuccessful(reply.user))}
            else{dispatch(loginFailed())}
        })
    }
}

export { fetchingGames, login };