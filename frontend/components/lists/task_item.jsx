import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="list-task-item" onClick={(e) => e.stopPropagation()}>
            {/* {task.status ?  */}
            {checked ?
                <i className="far fa-check-square" onClick={() => setChecked(!checked)}></i>
            : 
                <div className="task-check-not-done" onClick={() => setChecked(!checked)}>
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