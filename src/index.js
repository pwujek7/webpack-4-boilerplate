import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Test from './components/test/Test.jsx';

import './style/main.scss';

const ROOT = document.getElementById('root');

const App = () => (
  <Fragment>
    <Test msg="Hello !" />
  </Fragment>
);

ReactDOM.render(<App />, ROOT);
