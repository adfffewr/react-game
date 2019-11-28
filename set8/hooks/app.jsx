import React from 'react';
import ReactDom  from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Service  from './Service';

const Hot = hot(Service)

ReactDom.render(<Hot /> , document.querySelector('#root'));