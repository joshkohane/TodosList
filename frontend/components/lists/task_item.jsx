import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, updateTask, handleAddTask }) => {
    function handleUpdate() {
        const currTask = {status: !task.status, id: task.id}
        updateTask(task.id, currTask);
        handleAddTask();
    }

    return (
        <div className="list-task-item" onClick={(e) => e.stopPropagation()}>
            {task.status ?
                <i className="far fa-check-square list-task-checkmark" onClick={handleUpdate}></i>
            : 
                <div className="task-check-not-done" onClick={handleUpdate}></div>
            }
            <Link to={`/api/tasks/${task.id}`} 
                className={task.status ? "list-task-title-done" : "list-task-title"}
                >
                    {task.title}
            </Link>
        </div>
    )
}

export default TaskItem;