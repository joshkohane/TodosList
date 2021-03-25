import { RECEIVE_ALL_LISTS, RECEIVE_LIST, DELETE_LIST } from '../actions/list_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_LISTS:
            return action.lists;
        case RECEIVE_LIST:
            return Object.assign({}, oldState, action.list.list);
        case DELETE_LIST:
            delete newState[action.list.listId]
            return newState;
        default:
            return oldState;
    }
}