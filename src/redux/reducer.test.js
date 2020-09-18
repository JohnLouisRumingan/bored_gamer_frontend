import rootReducer from './reducer'
import { createStore } from 'redux'
import * as actions from './actions'

/*
Not used, only here as reminder of initialState found in reducer:

const initialState = {
    profile: null,
    games: [],
    gamesInCollection: [],
    meetups: [],
    dateSelected: null,
    todaysDate: null,
    sideDrawerOpen: false,
    search: [],
    detailedGame: null,
    errorMessage: null,
    invites: [],
    inviteToggle: false,
    users: [],
    meetupMenu: {
        pastEvents: false,
        allEvents: false,
        calendar: false,
        upcomingEvents: false,
        featuredEvents: true,
        meetupsOnDate: false,
    },
}
*/

// integration test with store test is more useful than smoke tests for rootReducers, which can be redundant
describe('drawerReducer', () => {

    beforeEach(() => {
    });
    
    afterEach(() => {
    });
    
    it('should switch the drawer state with the drawerClickHandler action', ()=> {
        const store = createStore(rootReducer, []);

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

    })

})
