import setupTests from './../setupTests';
import tempPolyfills from './../tempPolyfills';

import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);

  it('render properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {

    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })
});