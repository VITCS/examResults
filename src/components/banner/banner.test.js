import React from 'react';
import { shallow } from 'enzyme';
import banner from './banner';

describe('<banner />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<banner />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
