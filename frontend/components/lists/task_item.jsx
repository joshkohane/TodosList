import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, updateTask }) => {
    const [checked, setChecked] = useState(false)

    function handleUpdate() {
        debugger;
        updateTask(task.id, status = !task.status);
        // setChecked(!checked);
    }
    return (
        <div className="list-task-item" onClick={(e) => e.stopPropagation()}>
            {/* {task.status ?  */}
            {task.status ?
                <i className="far fa-check-square" onClick={handleUpdate}></i>
            : 
                <div className="task-check-not-done" onClick={handleUpdate}>
                    {/* <i className="far fa-check-square"></i> */}
                </div>
            }
            <Link to={`/api/tasks/${task.id}`} 
                className="list-task-title"
                >
                    {task.title}
            </Link>
        </div>
    )
}

export default TaskItem;