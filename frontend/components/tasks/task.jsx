import React, { useState, useEffect } from 'react';
import TaskHeader from './task_header';
import NewComment from './new_comment';
import Comments from './comments';

const Task = ({ task, ownProps, fetchOneTask, updateTask, addComment, updateComment, deleteComment }) => {
    useEffect(() => {
        fetchOneTask(parseInt(ownProps.match.params.taskId));
    }, [ownProps])

    function update() {
        setTimeout(() => fetchOneTask(parseInt(ownProps.match.params.taskId)), 100)
    }

    return (
        <div>
            {task.length > 0 ?
                <div className="task-container">
                    <div className="task-header-wrapper" onClick={(e) => e.stopPropagation()}>
                        <TaskHeader task={task[0]} updateTask={updateTask} />
                    </div>
                    <div className="new-comment-container">
                        <NewComment addComment={addComment} task={task[0]} update={update}/>
                    </div>
                    <div className="comments-wrapper">
                        {task[0].comments ? 
                            Object.values(task[0].comments).map((comment, idx) => {
                                return <Comments comment={comment} 
                                            key={idx} 
                                            update={update}
                                            updateComment={updateComment}
                                            deleteComment={deleteComment}
                                            />
                            })
                        : 
                            ''
                        }
                    </div>
                </div>
            
            : " "
            
            }
        </div>
    )
}

export default Task;