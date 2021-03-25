import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_TASK } from '../actions/task_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, newState, action.comment);
        case DELETE_COMMENT:
            delete newState[action.comment.comment]
            return newState;
        case RECEIVE_TASK:
            if (action.task.comments) {
                return action.task.comments;
            } else {
                return {};
            }
        default:
            return oldState;
    }
}