import React from 'react'
import { shallow } from 'enzyme'
import GameAddForm from '../GameAddForm'

beforeEach(() => {
    let props = {

    };
    let mockState = {

    };
});

describe('GameAddForm', () => {


    it('should render correctly without crashing', () => {
        const component = shallow(<GameAddForm />);
        expect(component).toMatchSnapshot();
    })

    it('adds state to the component', () => {
        const component = shallow(<GameAddForm {...props} />);
        component.setState({ ...mockState });
        const instance = component.instance();
        expect(instance.state).toEqual(mockState);
      
        // you can then directly call instance methods - e.g. mocking 
        // previous props/state to test changes are handled as expected
        // instance.componentDidUpdate(prevProps, prevMockState);
      });
})