import { fetchAllLists, fetchList, addList, updateList, deleteList } from '../util/list_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export const receiveAllLists = (lists) => ({
    type: RECEIVE_ALL_LISTS,
    lists
})

export const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list
})

export const deleteAList = (list) => ({
    type: DELETE_LIST,
    list
})

export const fetchEveryList = () => dispatch => fetchAllLists()
    .then(lists => dispatch(receiveAllLists(lists)))

export const fetchOneList = (listId) => dispatch => fetchList(listId)
    .then(list => dispatch(receiveList(list)))

export const addThisList = (list) => dispatch => addList(list)
    .then(list => dispatch(receiveList(list)))

export const updateThisList = (listId, list) => dispatch => updateList(listId, list)
    .then(list => dispatch(receiveList(list)))

export const deleteThisList = (listId) => dispatch => deleteList(listId)
    .then(list => dispatch(deleteAList(list)))