import * as actions from './actions'
import * as types from './actionTypes'

test('fetchedGames should return an action object with type and payload', () => {

    const games = { 
        title: "game title",
        players: "game players"
    }
    expect(actions.fetchedGames(games)).toStrictEqual({type: types.FETCHED_GAMES, payload: games});
    expect.objectContaining({type: expect.any(String)});
    expect.objectContaining({type: types.FETCHED_GAMES});
});

test('fetchedMeetups should return an action object with type "FETCHED_MEETUPS" and payload', () => {

    const event = {
        title: "event title",
        location: "location of event",
        other_games_allowed: true,
        date: "sample date",
        id: "sample id"
    }
    expect(actions.fetchedMeetups(event)).toStrictEqual({type: types.FETCHED_MEETUPS, payload: event});
    expect.objectContaining({type: expect.any(String)});
    expect.objectContaining({type: types.FETCHED_GAMES});
})

test('fetchingGames should fetch from the correct URL and receive the correct JSON object', () => {
    
})