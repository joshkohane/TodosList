import Task from './task';
import { connect } from 'react-redux';
import { fetchOneTask, updateThisTask, clearTasks } from '../../actions/task_actions';
import { addThisComment, updateThisComment, deleteThisComment } from '../../actions/comment_actions';

const mapSTP = (state, ownProps) => ({
    task: Object.values(state.tasks),
    ownProps: ownProps
})

const mapDTP = dispatch => ({
    fetchOneTask: (taskId) => dispatch(fetchOneTask(taskId)),
    updateTask: (taskId, task) => dispatch(updateThisTask(taskId, task)),
    addComment: (comment) => dispatch(addThisComment(comment)),
    updateComment: (commentId, comment) => dispatch(updateThisComment(commentId, comment)),
    deleteComment: (commentId) => dispatch(deleteThisComment(commentId)),
    clearTasks: () => dispatch(clearTasks())
})

export default connect(mapSTP, mapDTP)(Task);