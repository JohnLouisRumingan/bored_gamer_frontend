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

