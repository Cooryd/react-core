// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

  it('should display Hello World text', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find('div').text();
    const expected = 'Hello World!';

    expect(actual).toEqual(expected);
  });
});
