import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App';
import Component1 from './comp1'

render(<App/>, document.getElementById('app'));
render(<Component1/>, document.getElementById('root'));

