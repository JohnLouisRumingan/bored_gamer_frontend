import rootReducer from './reducer'
import { createStore } from 'redux'
import * as actions from './actions'


const testProfile = {name: "Sample Name", id: 1, username: "sample", bio: "sample bio", avatar: "avatar url"}


// integration test with store test is more useful than smoke tests for rootReducers, which can be redundant
describe('drawerReducer', () => {

    it('should switch the drawer state with the drawerClickHandler action', ()=> {
        const store = createStore(rootReducer, {});

        const action = actions.drawerClickHandler();
        store.dispatch(action);

        let actual = store.getState().sideDrawerOpen;
        let expected = true;
        expect(actual).toEqual(expected);

        store.dispatch(action);
        actual = store.getState().sideDrawerOpen;
        expected = false;
        expect(actual).toEqual(expected);
    })

    it('should set the drawer state to false with the backdropClick action', () => {
        const store = createStore(rootReducer, {sideDrawerOpen: true});

        const action = actions.backdropClick();
        store.dispatch(action);

        const actual = store.getState().sideDrawerOpen;
        const expected = false;
        expect(actual).toEqual(expected);
    })
})

describe('LOGOUT', () => {

    it('should reset state to initial conditions', () => {
        const store = createStore(rootReducer, {sideDrawerOpen: true, profile: testProfile});

        const action = actions.logout();
        store.dispatch(action);

        const actualDrawer = store.getState().sideDrawerOpen,
            actualProfile = store.getState().profile;

        const expectedDrawer = false, 
            expectedProfile = null;

        expect(actualDrawer).toEqual(expectedDrawer);
        expect(actualProfile).toEqual(expectedProfile);
        expect(actualProfile).not.toEqual(testProfile);
    })
})

describe('profileReducer', () => {

    it('should load the correct profile', () => {
        const store = createStore(rootReducer, {});

        const action = actions.loginSuccessful(testProfile);
        store.dispatch(action);

        const actual = store.getState().profile;
        const expected = testProfile;
        expect(actual).toEqual(expected);
    })
})

describe('gamesReducer', () => {
    
    const games = [{id:1, title:"Catan"}, {id:2, title: "Twilight Imperium"}, {}]
    const random = {id: 1, title: "Random game"}

    it('should load the correct games', () => {
        const store = createStore(rootReducer, {});
        const action = actions.fetchedGames(games);
        store.dispatch(action);

        const actual = store.getState().games;
        const expected = games;
        expect(actual).toEqual(expected);
    })

    it('should load a random game', () => {
        const store = createStore(rootReducer, {});
        const action = actions.randomGame(random);
        store.dispatch(action);

        const actual = store.getState().games;
        const expected = [random];
        expect(actual).toEqual(expected);
    })
})

describe('meetupReducer', () => {

    const events =[
        {
            meetup_details: {
                id: 1, title: "sample", date: "something", location:"string", 
                other_games_allowed: true
            },
            host: {
                name: "sample name", host_id: 1 
            },
            participants: [],
            collection: []
        }, 
        {
            meetup_details: {
                id: 2, title: "sampl2e", date: "something2", location:"string2", 
                other_games_allowed: true
            },
            host: {
                name: "sample name2", host_id: 2 
            },
            participants: [],
            collection: []
        }
    ];
    const newEvent = {
        meetup_details: {
            id: 3, title: "sample3", date: "something3", location:"string3", 
            other_games_allowed: true
        },
        host: {
            name: "sample name3", host_id: 3 
        },
        participants: [],
        collection: []
    };

    it('should load the events', () => {
        const store = createStore(rootReducer, {});
        const action = actions.fetchedMeetups(events);
        store.dispatch(action);

        const actual = store.getState().meetups;
        const expected = events;
        expect(actual).toEqual(expected);
    })
    
    it('should add events', () => {
        const store = createStore(rootReducer, {});
        const action = actions.fetchedMeetups(events);
        store.dispatch(action);
        const addEvent = actions.addNewEvent(newEvent);
        store.dispatch(addEvent);

        const actual = store.getState().meetups;
        const expected = [...events, newEvent];
        expect(actual).toEqual(expected);
    })

    it('should find and modify events', () => {

        const store = createStore(rootReducer, {});
        store.dispatch(actions.fetchedMeetups(events));
        store.dispatch(actions.addNewEvent(newEvent))
        const modifiedEvent = {...newEvent, meetup_details: {...newEvent.meetup_details, title: "sample4"}, collection: [{}, {}]}
        store.dispatch(actions.updateMeetup(modifiedEvent));

        const actual = store.getState().meetups;
        const expected = [...events, modifiedEvent];
        expect(actual).toEqual(expected);
        expect(actual[2].collection.length).toBe(2);
        expect(actual[2].meetup_details.title).toBe(modifiedEvent.meetup_details.title);
        expect(actual[2].meetup_details.title).toBe("sample4");
    })
})