import React from 'react';
import Artists from './Artists';
import Albums from './Albums';
import { Router, Route, browserHistory } from 'react-router';

export default class App extends React.Component {

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Artists}></Route>
                <Route path=":id/albums" component={Albums}></Route>
            </Router>
        );
    }

}