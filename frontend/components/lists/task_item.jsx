import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, updateTask, deleteTask, handleAddTask }) => {
    const [showPopUp, setShowPopUp] = useState(false);

    function handleUpdate() {
        const currTask = {status: !task.status, id: task.id}
        updateTask(task.id, currTask);
        handleAddTask();
    }

    function handleDeleteTask() {
        deleteTask(task.id)
            .then(handleAddTask(), setShowPopUp(false));
        
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
            <span className="delete-task-button" onClick={() => setShowPopUp(true)}>&#x2715;</span>
            {showPopUp ?
                <div className="popup-wrapper" onClick={() => setShowPopUp(false)}>
                    <div className="popup-container" onClick={(e) => e.stopPropagation()} >
                        <div className="popup-inner-container">
                            <p className="popup-text">Are you sure you want to delete this item?</p>
                            <div className="popup-btns">
                                <button onClick={() => setShowPopUp(false)} className="popup-no">NO</button>
                                <button onClick={handleDeleteTask} className="popup-yes">YES</button>
                            </div>
                        </div>
                    </div>
                </div>
            : ""}
        </div>
    )
}

export default TaskItem;