import { RECEIVE_TASK, DELETE_TASK } from '../actions/task_actions';
import { RECEIVE_ALL_LISTS } from '../actions/list_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TASK:
            return Object.assign({}, action.task.task);
        case DELETE_TASK:
            delete newState[action.task.task]
            return newState;
        case RECEIVE_ALL_LISTS:
            return {};
        default:
            return oldState;
    }
}