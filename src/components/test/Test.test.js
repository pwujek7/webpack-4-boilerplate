import React from 'react';
import {shallow} from 'enzyme';

import Test from './Test.jsx';

describe('<Test />', () => {
  it('renders without errors', () => {
    const props = {
      msg: 'test test'
    };

    shallow(<Test {...props} />);
  });
});
