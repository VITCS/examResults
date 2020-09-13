import React from 'react';
import { shallow } from 'enzyme';
import menu from './menu';

describe('<menu />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<menu />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
