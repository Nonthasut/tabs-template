import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TabsTemplate from './TabsTemplate.js'
ReactDOM.render(
 <TabsTemplate/>,

  document.getElementById('root'),

);
serviceWorker.unregister();
