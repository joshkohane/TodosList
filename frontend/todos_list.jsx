import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { addThisComment, updateThisComment, deleteThisComment } from './actions/comment_actions';
import { fetchEveryList, fetchOneList, addThisList, updateThisList, deleteThisList } from './actions/list_actions';
import { fetchOneTask, addThisTask, updateThisTask, deleteThisTask } from './actions/task_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.store = store;
    window.addThisComment = addThisComment;
    window.updateThisComment = updateThisComment;
    window.deleteThisComment = deleteThisComment;
    window.fetchEveryList = fetchEveryList;
    window.fetchOneList = fetchOneList;
    window.addThisList = addThisList;
    window.updateThisList = updateThisList;
    window.deleteThisList = deleteThisList;
    window.fetchOneTask = fetchOneTask;
    window.addThisTask = addThisTask;
    window.updateThisTask = updateThisTask;
    window.deleteThisTask = deleteThisTask;

    ReactDOM.render(<Root store={store} />, root)
})