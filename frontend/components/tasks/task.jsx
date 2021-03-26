import React, { useState, useEffect } from 'react';
import Comments from './comments';

const Task = ({ task, ownProps, fetchOneTask}) => {
    const [editTitleBtn, setEditTitleBtn] = useState(false);
    const [newTitle, setNewTitle] = useState(task[0].title);
    const [editDescriptionBtn, setEditDescriptionBtn] = useState(false);
    const [newDescription, setNewDescription] = useState(task[0].description);

    useEffect(() => {
        fetchOneTask(parseInt(ownProps.match.params.taskId));
    }, [ownProps])

    return (
        <div>
            {task.length > 0 ?
                <div className="task-container">
                    <div className="task-header-wrapper" onClick={(e) => e.stopPropagation()}>
                        <div className="task-header">
                            {task[0].status ?
                                <i className="far fa-check-square task-checkmark"
                                //  onClick={handleUpdate}
                                ></i>
                                :
                                <div className="task-not-done" 
                                // onClick={handleUpdate}
                                ></div>
                            }
                            <div className={task[0].status ? "task-title-done" : "task-title"}>
                                {task[0].title}
                            </div>
                        </div>
                        <i className="fas fa-pencil-alt update-title-button" onClick={() => setEditTitleBtn(!editTitleBtn)}></i>
                        <div className="task-description" >{task[0].description}</div>
                        <i className="fas fa-pencil-alt update-description-button" onClick={() => setEditDescriptionBtn(!editDescriptionBtn)}></i>
                    </div>
                    {/* <div className="task-header">
                        <h1 onClick={() => setShowComments(!showComments)}>{task[0].title}</h1>
                        <h2>{task[0].status ? "Done" : "In Progress"}</h2>
                    </div> */}
                    <div className="comments-container">
                        {task[0].comments ? 
                            Object.values(task[0].comments).map((comment, idx) => {
                                return <Comments comment={comment} key={idx} />
                            })
                        : 
                            <h1>Add Some Comments!</h1>
                        }
                    </div>
                </div>
            
            : " "
            
            }
        </div>
    )
}

export default Task;