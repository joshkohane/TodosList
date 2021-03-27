import List from './list';
import { connect } from 'react-redux';
import { fetchEveryList, addThisList, updateThisList, deleteThisList } from '../../actions/list_actions';
import { addThisTask, updateThisTask, deleteThisTask } from '../../actions/task_actions';

const mapSTP = state => ({
    lists: Object.values(state.lists)
})

const mapDTP = dispatch => ({
    fetchEveryList: () => dispatch(fetchEveryList()),
    addList: (list) => dispatch(addThisList(list)),
    updateList: (listId, list) => dispatch(updateThisList(listId, list)),
    deleteList: (listId) => dispatch(deleteThisList(listId)),
    addTask: (task) => dispatch(addThisTask(task)),
    updateTask: (taskId, task) => dispatch(updateThisTask(taskId, task)),
    deleteTask: (taskId) => dispatch(deleteThisTask(taskId)),
})

export default connect(mapSTP, mapDTP)(List);