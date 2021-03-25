import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListContainer from './lists/list_container';
import TaskContainer from './tasks/task_container';

const App = () => (
    <div className="app-wrapper">
        <h1 className="app-header">Todos List</h1>
        <Switch>
            <Route path={`/api/tasks/:taskId`} component={TaskContainer} />
            <Route exact path='/' component={ListContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App;