import React from 'react'
import { Provider } from 'react-redux'
import GameAddForm from '../GameAddForm'
import configureStore from 'redux-mock-store' 
import { render, fireEvent, screen, cleanup } from '../../../__tests__/test-utils'
import { addGamesToEvent } from '../../redux/actions'
import renderer from 'react-test-renderer'

describe('GameAddForm', () => {
    
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    
    const initialState = {
        profile: {id: 1},
        gamesInCollection: [],
    };

    let store;
    let wrappedComponent;
    
    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();

        wrappedComponent = renderer.create(
            <Provider store={store}>
                <GameAddForm  {...initialState} meetupID={1} />
            </Provider>
        )
    });

    afterEach(() => {
        cleanup
    });

    it(`renders the component with the text "Games you're bringing"`, () => {
        render(<GameAddForm />, {initialState})
        expect(screen.getByText(/Games you're bringing:/i)).toBeInTheDocument();
    })

    it('should render and set initial state correctly without crashing', () => {
        const component = render(<GameAddForm />, {initialState});
        expect(component).toMatchSnapshot();
    })

    it('should dispatch an action on form submit', () => {
        
        let mockGameAdd = {
            userID:1,
            meetupID:1,
            chosenGames:[{game_id: "XsyadT", game_name: "Catan", id: 1}]
        }
        // renderer.act(() => {
        //     wrappedComponent.root.findByType('dropdown').props.onChange(mockGameAdd);
        // })

        renderer.act(() => {
            wrappedComponent.root.findByType('button').props.onClick();
        });


        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            addGamesToEvent(mockGameAdd)
        );
    })


})