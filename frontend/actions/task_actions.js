import { fetchTask, addTask, updateTask, deleteTask } from '../util/task_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const recieveTask = (task) => ({
    type: RECEIVE_TASK,
    task
})

export const deleteATask = (task) => ({
    type: DELETE_TASK,
    task
})

export const fetchOneTask = (taskId) => dispatch => fetchTask(taskId)
    .then(task => dispatch(recieveTask(task)))

export const addThisTask = (listId, task) => dispatch => addTask(listId, task)
    .then(task => dispatch(recieveTask(task)))

export const updateThisTask = (taskId, task) => dispatch => updateTask(taskId, task)
    .then(task => dispatch(recieveTask(task)))

export const deleteThisTask = (taskId) => dispatch => deleteTask(taskId)
    .then(task => dispatch(deleteATask(task)))