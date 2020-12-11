import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent as Logo } from './images/logo.svg';

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Logo />
  </React.StrictMode>,
  document.getElementById('root')
);