import {fetchedGames} from './actions'

test('fetchedGames should return an action object with type and payload', () => {

    const games = { 
        title: "game title",
        players: "game players"
    }
    expect(fetchedGames(games)).toStrictEqual({type: "FETCHED_GAMES", payload: games});
    expect.objectContaining({type: expect.any(String)});
    expect.objectContaining({type: "FETCHED_GAMES"});
});

test('fetchedMeetups should return an action object with type "FETCHED_MEETUPS" and payload', () => {

})