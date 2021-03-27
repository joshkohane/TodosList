import React, { useState } from 'react';

const TaskHeader = ({ task, updateTask }) => {
    const [editTitleBtn, setEditTitleBtn] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
    const [editDescriptionBtn, setEditDescriptionBtn] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    
    function handleUpdate() {
        const currTask = { status: !task.status, id: task.id }
        updateTask(task.id, currTask);
    }

    function handleSubmit(type) {
        if (newTitle.length >= 3 && newDescription.length >= 3) {
            const currTask = { title: newTitle, description: newDescription, id: task.id }
            updateTask(task.id, currTask);
            if (type === 'title') {
                setEditTitleBtn(false);
            } else {
                setEditDescriptionBtn(false);
            }
        }
    }
    
    return (
        <div>
            <div className="task-header">
                {task.status ?
                    <i className="far fa-check-square task-checkmark"
                     onClick={handleUpdate}
                    ></i>
                    :
                    <div className="task-not-done"
                    onClick={handleUpdate}
                    ></div>
                }
                {/* <div > */}
                    {editTitleBtn ?
                        <form className="edit-task-form">
                            <input type="text"
                                className="edit-task-input"
                                maxLength="25"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                />
                            <i className="far fa-check-square update-task-title-button"
                                onClick={() => handleSubmit('title')}
                            ></i>
                        </form>
                        :
                        <div className={task.status ? "task-title-done" : "task-title"}>
                            {task.title}
                        </div>
                    }
                {/* </div> */}
            </div>
            <i className="fas fa-pencil-alt update-title-button" onClick={() => setEditTitleBtn(!editTitleBtn)}></i>
            <div>
                {editDescriptionBtn ?
                    <form className="edit-task-form">
                        <textarea type="text"
                            className="edit-task-textarea"
                            maxLength="150"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                        <i className="far fa-check-square update-task-description"
                            onClick={() => handleSubmit('description')}
                        ></i>
                    </form>
                    :
                    <div className="task-description" onClick={() => setEditTitleBtn(!editTitleBtn)}>
                        {task.description}
                    </div>
                }
            </div>
            <i className="fas fa-pencil-alt update-description-button" onClick={() => setEditDescriptionBtn(!editDescriptionBtn)}></i>
        </div>
    )
}

export default TaskHeader;
