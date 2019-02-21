import React from 'react';
import {mount} from 'enzyme';

import App, {Div} from './';

test('<App />', () => {
  const wrapper = mount(<App />);

  const container = wrapper.find(Div);

  expect(container).toHaveProp('children');
})