import React from 'react';
import { shallow } from 'enzyme';
import homePage from './homePage';

describe('<homePage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<homePage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
