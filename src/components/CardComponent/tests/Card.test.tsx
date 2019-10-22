import React from 'react';
import { shallow } from 'enzyme';
import CardComponent from '../Card';

const props = {
    cardDetails: {
        Header: ''
    }
}
it('Sample test case', () => {
    let wrapper = shallow(<CardComponent {...props} />)
    expect(wrapper).toMatchSnapshot();
})