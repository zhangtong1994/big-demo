import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './stylesheet/common.css';
import routes from './routes.js';
import {Router,hashHistory} from 'react-router';
injectTapEventPlugin();
ReactDOM.render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
