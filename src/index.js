import React from 'react';
import ReactDOM from 'react-dom';
import Artists from './Artists';
import Albums from './Albums';
import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Artists}></Route>
        <Route path=":id/albums" component={Albums}></Route>
    </Router>,
    document.getElementById('root')
);
