import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  let handleSelection;

  wrapper = shallow(<Controls
    handleSelection={handleSelection} />);
  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
  
