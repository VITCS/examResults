import React from 'react';
import { shallow } from 'enzyme';
import test from './test';

describe('<test />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<test />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
