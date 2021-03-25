import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListContainer from './lists/list_container';

const App = () => (
    <div className="app-wrapper">
        HELLOOOOOOOOOO
        <Switch>
            <Route exact path='/' component={ListContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App;