import Task from './task';
import { connect } from 'react-redux';
import { fetchOneTask } from '../../actions/task_actions';

const mapSTP = (state, ownProps) => ({
    task: Object.values(state.tasks),
    ownProps: ownProps
})

const mapDTP = dispatch => ({
    fetchOneTask: (taskId) => dispatch(fetchOneTask(taskId))
})

export default connect(mapSTP, mapDTP)(Task);