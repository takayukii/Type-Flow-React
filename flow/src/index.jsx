// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/Home';

// ReactDOM.render(<Home name="Max" age="27"/>, document.getElementById('app'));
// ReactDOM.render(<Home name="Max"/>, document.getElementById('app'));
ReactDOM.render(<Home name="Max" age={27}/>, document.getElementById('app'));
