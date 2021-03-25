import { combineReducers } from 'redux';
import ListReducer from './list_reducer';
import TaskReducer from './task_reducer';
import CommentReducer from './comment_reducer';

export default combineReducers({
    lists: ListReducer,
    tasks: TaskReducer,
    comments: CommentReducer
})