import React from 'react'
import GameCard from '../GameCard'
import { render, fireEvent, screen, cleanup } from '../../../__tests__/test-utils'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'

describe('GameAddForm', () => {

    const middlewares = [];
    const mockStore = configureStore(middlewares);

    let store;
    
    const initialState = {};
    
    let props = {
        game:{
            id:1,
            name: "Prop Name",
            designers: ["Designer name"],
            image_url: "image_url here",
            favorite: true,
            owned: true,
            game_id: "sXyweaD"
        }
    };
    
    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
    });

    afterEach(cleanup);

    it('should render and set initial state correctly without crashing', () => {
        const component = render(<GameCard />, {initialState});
        expect(component).toMatchSnapshot();
    });

    it('renders default props', () => {
        const cardComponent = mount(<Provider store={store}><GameCard /></Provider>);
        expect(cardComponent.find('span').text()).toEqual('defaultName');
    })

    it('renders passed in props', () => {
        const cardComponent = mount(<Provider store={store}><GameCard {...props}/></Provider>);
        expect(cardComponent.find('span').text()).toEqual('Prop Name');
        // expect(cardComponent.find('a').getAttribute('href')).toEqual(`/games/${props.game.image_url}`);
    })

    // it('check children prop type', () => {  
    //     const cardComponent = mount(<Provider store={store}><GameCard /></Provider>);
    //     expect(cardComponent.props().children).toBeObject();
    // });

    // it('')
})