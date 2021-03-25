import React, { useState, useEffect } from 'react';
import Comments from './comments';

const Task = ({ task, ownProps, fetchOneTask}) => {
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        fetchOneTask(parseInt(ownProps.match.params.taskId));
    }, [ownProps])

    function displayComments() {
        let comments = Object.values(task[0].comments).map((comment, idx) => {
            return <Comments comment={comment} key={idx} />
        })

        return comments
    }

    return (
        <div>
            {task.length > 0 ?
                <div>
                    <h1 onClick={() => setShowComments(!showComments)}>{task[0].title}</h1>
                    <h2>{task.status ? "Done" : "In Progress"}</h2>
                    {showComments ?
                        task[0].comments ? 
                            displayComments()
                        : 
                            <h1>Add Some Comments!</h1>
                    : ""}
                </div>
            
            : " "
            
            }
        </div>
    )
}

export default Task;