import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
    return (
        <div>
            <Link to={`/api/tasks/${task.id}`}>{task.title}</Link>
            <h2>{task.status ? "Done" : "In Progress"}</h2>
        </div>
    )
}

export default TaskItem;