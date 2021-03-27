import Task from './task';
import { connect } from 'react-redux';
import { fetchOneTask, updateThisTask } from '../../actions/task_actions';
import { addThisComment } from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => ({
    task: Object.values(state.tasks),
    ownProps: ownProps
})

const mapDTP = dispatch => ({
    fetchOneTask: (taskId) => dispatch(fetchOneTask(taskId)),
    updateTask: (taskId, task) => dispatch(updateThisTask(taskId, task)),
    addComment: (comment) => dispatch(addThisComment(comment))
})

export default connect(mapSTP, mapDTP)(Task);