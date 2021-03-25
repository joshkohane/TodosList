import { RECEIVE_TASK, DELETE_TASK } from '../actions/task_actions';
import { RECEIVE_LIST } from '../actions/list_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TASK:
            return Object.assign({}, newState, action.task.task);
        case DELETE_TASK:
            delete newState[action.task.task]
            return newState;
        case RECEIVE_LIST:
            if (action.list.tasks) {
                return action.list.tasks;
            } else {
                return {};
            }
        default:
            return oldState;
    }
}